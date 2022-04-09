import { Request, Response } from 'express';

export default class TestController {
  public async index(request: Request, response: Response){
    return response.json({ message: 'Hello World' });
  }
}