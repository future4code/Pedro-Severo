import {Request, Response} from 'express'
import {
  GetTasksByUserInput,
  GetTasksByUserInteractor
} from '../business/usecases/getTasksByUser/GetTasksByUserInteractor'

export async function getTaskByUserEndpoint(req: Request, res: Response) {
  try {
    const getTasksInput: GetTasksByUserInput = {
      userId: req.params.userId
    }

    const useCase = new GetTasksByUserInteractor()

    console.log('ID', req.params.userId)

    const result = await useCase.execute(getTasksInput)

    res.send({...result})
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
}
