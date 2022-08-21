import express, { Request, Response } from 'express'
import ImageFile from '../utils/imageFile'

interface imageRes {
  name: string,
  width: string,
  height: string,
}

const imageRoute = express.Router()
imageRoute.get('/api/image', async (req: Request, response: Response): Promise<void> => {
  try {
    const res: imageRes = req.query as any
    const width: number = parseInt(res.width)
    const height: number = parseInt(res.height)
    if (width === 0 || isNaN(width)) {
      response.send({
        error: 'Width is required and width > 0'
      })
      return
    }

    if (height === 0 || isNaN(height)) {
      response.send({
        error: 'Height is required and height > 0'
      })
      return
    }

    const result: string = await ImageFile(res.name, parseInt(res.width), parseInt(res.height))
    if (!res.name) {
      response.send({
        error: 'Name file is required'
      })
      return
    }
    response.send(result)
  } catch {
    response.send({
      error: 'Error'
    })
  }
})

export default imageRoute
