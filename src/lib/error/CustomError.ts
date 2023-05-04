export class CustomError extends Error {
  statusCode: number

  constructor(statusCode: number, message: string) {
    super(message)
    this.statusCode = statusCode
  }
}

export class NotFoundError extends CustomError {
  constructor(message: string) {
    super(404, message)
  }
}
