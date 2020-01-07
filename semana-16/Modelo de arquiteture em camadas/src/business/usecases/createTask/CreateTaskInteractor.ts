import {generateRandomId} from '../../utils/generateRandomId'
import {Task} from '../../entities/Task'
import {TaskDatabase} from '../../../data/TaskDatabase'

export class CreateTaskInteractor {
  private taskDatabase: TaskDatabase

  constructor() {
    this.taskDatabase = new TaskDatabase()
  }

  async execute(createTaskInput: CreateTaskInput): Promise<CreateTaskOutput> {
    const newTask = new Task(generateRandomId(), createTaskInput.description, createTaskInput.limitDate, createTaskInput.requestingUserId, createTaskInput.responsibleUserId)

    await this.taskDatabase.createTask(newTask)

    return {
      id: newTask.getId(),
      description: newTask.getDescription()
    }
  }
}

export interface CreateTaskInput {
  description: string
  limitDate: Date
  requestingUserId: string
  responsibleUserId: string
}

export interface CreateTaskOutput {
  id: string
  description: string
}
