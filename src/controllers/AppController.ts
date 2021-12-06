import { Request, Response } from 'express';

export default class AppController {
  public async index(request: Request, response: Response){
    return response.json({ message: 'Hello World' });
  }

  public async show(request: Request, response: Response){
    // #swagger.tags = ['User']
    // #swagger.description = 'Endpoint para obter um usuário.'
    
    const { name } = request.params;
    return response.json({ name });
  }
}