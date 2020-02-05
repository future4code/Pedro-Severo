import {Task} from '../../entities/Task'
import {TaskDatabase} from '../../../data/TaskDatabase'

export class GetTasksByUserInteractor {
  private taskDatabase: TaskDatabase

  constructor() {
    this.taskDatabase = new TaskDatabase()
  }

  async execute(createUserInput: GetTasksByUserInput): Promise<GetTasksByUserOutput> {
    const tasks: Task[] = await this.taskDatabase.getTasksByUserId(createUserInput.userId)

    return {
      tasks: tasks.map(task => {
        return {
          id: task.getId(),
          description: task.getDescription(),
          limitDate: task.getLimitDate().getDate()
        }
      })
    }
  }
}

export interface GetTasksByUserInput {
  userId: string
}

interface GetTasksByUserOutput {
  tasks: Array<{
    id: string
    description: string
    limitDate: number
  }>
}