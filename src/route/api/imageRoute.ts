import express, { Request, Response } from 'express'
import ImageFile from '../../utils/imageFile'


interface ImageModal {
  filename: string,
  width: string,
  height: string,
}

const imageRoute = express.Router()
imageRoute.get('/api/image', async (req: Request, response: Response): Promise<void> => {
  try {
    const request: ImageModal = req.query as any as ImageModal
    const width: number = parseInt(request.width)
    const height: number = parseInt(request.height)

    if (isNaN(width) || width === 0 || width < 0) {
      response.send({
        error: 'Width is required and width > 0'
      })
      return
    }

    if (isNaN(height) || height < 0 || height === 0) {
      response.send({
        error: 'Height is required and height > 0'
      })
      return
    }

    const result: string = await ImageFile(request.filename, width, height)
    if (result.length < 1) {
      response.send({
        error: 'File name is required'
      })
      return
    }

    response.send(result)
    console.log('Resize Image Success')
  } catch {
    response.send({
      error: 'Error'
    })
  }
})

export default imageRoute
