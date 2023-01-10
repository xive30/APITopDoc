import { Request, Response } from "express";
import { logger } from "~/winston.logger";
import { AuthService } from "../service/auth.service";
import bcrypt from "bcrypt";
import { NotFoundError } from "../core/errors/errors";

const jwt = require("jsonwebtoken");

export class AuthHandler {
	private authService: AuthService;

	constructor(authService: AuthService) {
		this.authService = authService;
	}

	login = async (req: Request, res: Response) => {
		try {
			const user = await this.authService.findByEmail(req.body.email);

            if (user === null) throw new NotFoundError("User not found");


			const checkPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );
			if (checkPassword) {
				const payload = { id: user.id_td_user, email: user.email /** role */ };

				const refreshToken: any = jwt.sign(
					payload,
					process.env.JWT_TOKEN_SECRET as string,
					{ expiresIn: '15d' }
				);

				const accessToken: any = jwt.sign(
					payload,
					process.env.JWT_TOKEN as string,
					{ expiresIn: "12h" }
				);

				return res.status(200).json({
					refreshToken: refreshToken,
					accessToken: accessToken,
				});
			} else {
				res.status(400).json({ message: "Mot de passe Invalide" });
			}
		} catch (error) {
			logger.error(error);
			res.status(500);
		}
	};

	token = async (req: Request, res: Response) => {
        try {
            const refreshToken = req.body.token
            if (refreshToken == null) return res.sendStatus(401)
            const payload = jwt.decode(refreshToken, process.env.JWT_TOKEN_SECRET);

            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET!, (err: any) => {
                if (err) return res.sendStatus(403)
                const accessToken = jwt.sign({ id: payload.userId }, process.env.ACCESS_TOKEN_SECRET!, { expiresIn: '15s' })
                res.json({ accessToken: accessToken })
            })
        } catch (err) {

        }
    }
}

