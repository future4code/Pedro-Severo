import {User} from '../../entities/User'
import {generateRandomId} from '../../utils/generateRandomId'
import {UserDatabase} from '../../../data/UserDatabase'

export class CreateUserInteractor {
  private userDatabase: UserDatabase

  constructor() {
    this.userDatabase = new UserDatabase()
  }

  async execute(createUserInput: CreateUserInput): Promise<CreateUserOutput> {
    const newUser = new User(generateRandomId(), createUserInput.name, createUserInput.nickname, createUserInput.email, createUserInput.birthdate)

    await this.userDatabase.createUser(newUser)

    return {
      id: newUser.getId(),
      email: newUser.getEmail()
    }
  }
}

export interface CreateUserInput {
  name: string
  nickname: string
  email: string
  birthdate: Date
}

export interface CreateUserOutput {
  id: string
  email: string
}
