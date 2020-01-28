export class Task {
  constructor(
    private id: string,
    private description: string,
    private limitDate: Date,
    private requestingUserId: string,
    private responsibleUserId: string
  ) {}

  public getId() {
    return this.id
  }

  public getDescription() {
    return this.description
  }

  public getLimitDate() {
    return this.limitDate
  }

  public getRequestingUserId() {
    return this.requestingUserId
  }

  public getResponsibleUserId() {
    return this.responsibleUserId
  }
}


