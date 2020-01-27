import { IdGeneratorGateway } from "../../business/gateway/idGenerator/idGeneratorGateway";
import { v4 } from "uuid";

export class V4UuidGenerator implements IdGeneratorGateway {
  public generateId(): string {
    return v4();
  }
}
