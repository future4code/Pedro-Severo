import {User} from '../business/entities/User'
import knex from 'knex'

class UserModel {
  constructor(public id: string,
              public name: string,
              public nickname: string,
              public email: string,
              public birthdate: string) {
  }
}

class UserEntityMapper {
  entityToModel(entity: User): UserModel {
    return {
      id: entity.getId(),
      name: entity.getName(),
      nickname: entity.getNickname(),
      email: entity.getEmail(),
      birthdate: entity.getBirthdate().toISOString().split('T')[0],
    }
  }
}

export class UserDatabase {
  private connection: knex
  private userEntityMapper: UserEntityMapper

  constructor() {
    this.connection = knex({
      client: 'mysql',
      connection: {
        host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
        user: 'darvas',
        password: 'teste',
        database: 'aulas_arquitetura'
      }
    })

    this.userEntityMapper = new UserEntityMapper()
  }

  async createUser(user: User) {
    // await this.connection.raw(`
    //     INSERT INTO users (id, name, nickname, email, birthdate)
    //     VALUES (${user.getId()}, ${user.getName()}, ${user.getNickname()}, ${user.getEmail()}, ${user.getBirthdate()})
    // `)

    await this.connection('users').insert(this.userEntityMapper.entityToModel(user))
  }
}
