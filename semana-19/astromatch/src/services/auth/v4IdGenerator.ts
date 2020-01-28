import {v4} from 'uuid';
import { IdGeneratorGateway } from '../../business/gateways/Auth/IdGeneratorGateway';

export class V4IdGenerator implements IdGeneratorGateway {
  generateId(): string {
    return v4();
  };
};
