// lib/withErrorHandling.ts

import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { BusinessException } from '@/lib/error/BusinessException'

const withErrorHandling = (handler: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await handler(req, res)
  } catch (error) {
    if (error instanceof BusinessException) {
      res.status(error.errorCode.httpStatus).json({ error: error.errorCode })
    } else {
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }
}

export default withErrorHandling
