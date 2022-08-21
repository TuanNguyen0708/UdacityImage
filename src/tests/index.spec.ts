import supertest from 'supertest'
import app from '../index'

const successCode = 200
const request = supertest(app)

describe('TEST - success file name', () => {
  it('get api success', async () => {
    const response = await request.get('/api/image?name=city&width=400&height=400')
    expect(response.status).toBe(successCode)
    expect(response.text).toEqual('<img src="../images/temporary/city.jpg">')
  })
})

describe('TEST - error file name', () => {
  it('get api error', async () => {
    const response = await request.get('/api/image?name=city&width=400&height=400')
    expect(response.status).toBe(successCode)
    expect(response.body).toEqual({ error: 'File name is required' })
  })
})

describe('TEST - error width', () => {
  it('get api error', async () => {
    const response = await request.get('/api/image?name=city&width=0&height=400')
    expect(response.status).toBe(successCode)
    expect(response.body).toEqual({ error: 'Width is required and width > 0' })
  })
})

describe('TEST - error height', () => {
  it('get api error', async () => {
    const response = await request.get('/api/image?name=city&width=400&height=0')
    expect(response.status).toBe(successCode)
    expect(response.body).toEqual({ error: 'Height is required and height > 0' })
  })
})
