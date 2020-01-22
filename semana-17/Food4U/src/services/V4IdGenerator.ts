import { v4 } from 'uuid';
import {RandomIdGenerator} from '../business/usecases/User/CreateUserUseCase';

export class V4IdGenerator implements RandomIdGenerator {
  generate(): string {
    return v4();
  };
};


export class MeuIdGenerator implements RandomIdGenerator {
  generate(): string {
    return `${Math.random() * 10000}`;
  };
};
