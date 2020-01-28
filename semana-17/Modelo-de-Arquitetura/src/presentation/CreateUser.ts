import {Request, Response} from 'express'
import {CreateUserInput, CreateUserInteractor} from '../business/usecases/createUser/CreateUserInteractor'

export async function createUserEndpoint(req: Request, res: Response) {
  try {
    const createUserInput: CreateUserInput = {
      birthdate: new Date(req.body.birthdate),
      email: req.body.email,
      name: req.body.name,
      nickname: req.body.nickname
    }

    const useCase = new CreateUserInteractor()

    const result = await useCase.execute(createUserInput)

    res.send({...result, success: true, message: 'User created succesfully'})
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
}
