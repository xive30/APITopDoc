import { NextFunction, Request, Response } from 'express';
import { logger } from '~/winston.logger';
 
function unexpectedErrorMiddleware(error: Error, request: Request, response: Response, next: NextFunction) {
  const status = 500;
  const message = 'Something went wrong';
  logger.error(error)
  response
    .status(status)
    .send({
      status,
      message,
    })
}
 
export default unexpectedErrorMiddleware;