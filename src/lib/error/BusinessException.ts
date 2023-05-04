export type ErrorCode = {
  errorCode: string
  message: string
  httpStatus: number
}

export const REVIEW_NOT_FOUND: ErrorCode = {
  errorCode: 'REVIEW_NOT_FOUND',
  message: 'Review not found',
  httpStatus: 404,
}

export class BusinessException extends Error {
  statusCode: number
  errorCode: ErrorCode

  constructor(statusCode: number, errorCode: ErrorCode) {
    super()
    this.statusCode = statusCode
    this.errorCode = errorCode
  }
}

export class ReviewNotFound extends BusinessException {
  constructor() {
    super(REVIEW_NOT_FOUND.httpStatus, REVIEW_NOT_FOUND)
  }
}
