import { Router } from "express";
import handler from "../../modules/person/handler/person.handler";

export const router = Router();

router.get('/person', handler.getPersons);

