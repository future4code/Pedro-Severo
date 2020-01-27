import { CustomError } from "./customError";

export class InvalidBalanceError extends CustomError {
  constructor(message: string = "User balance is invalid") {
    super(message, 405);
  }
}
