import {Request, Response} from 'express'
import {CreateTaskInput, CreateTaskInteractor} from '../business/usecases/createTask/CreateTaskInteractor'



export async function createTaskEndpoint(req: Request, res: Response) {
  try {
    const createUserInput: CreateTaskInput = {
      description: req.body.description,
      limitDate: new Date(req.body.limitDate),
      requestingUserId: req.body.requestingUserId,
      responsibleUserId: req.body.responsibleUserId
    }

    const useCase = new CreateTaskInteractor()

    const result = await useCase.execute(createUserInput)

    res.send({...result, success: true, message: 'Task created succesfully'})
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
}
