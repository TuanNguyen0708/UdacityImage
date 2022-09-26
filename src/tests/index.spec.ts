import app from '../index';
import supertest from 'supertest';

const codeSuccess = 200;
const request = supertest(app);

describe('TEST - success file name', () => {
  it('get api success', async () => {
    const response = await request.get(
      '/api/image?filename=city&width=200&height=200'
    );
    console.log(response.text);
    expect(response.status).toBe(codeSuccess);
    expect(response.text).toEqual(response.text);
  });
});

describe('TEST - error file name', () => {
  it('get api error', async () => {
    const response = await request.get(
      '/api/image?filename=&width=200&height=200'
    );
    expect(response.status).toBe(codeSuccess);
    expect(response.body).toEqual({ error: 'File name is required' });
  });
});

describe('TEST - error width', () => {
  it('get api error', async () => {
    const response = await request.get(
      '/api/image?filename=city&width=0&height=400'
    );
    expect(response.status).toBe(codeSuccess);
    expect(response.body).toEqual({ error: 'Width is required and width > 0' });
  });
});

describe('TEST - error height', () => {
  it('get api error', async () => {
    const response = await request.get(
      '/api/image?filename=city&width=400&height=0'
    );
    expect(response.status).toBe(codeSuccess);
    expect(response.body).toEqual({
      error: 'Height is required and height > 0'
    });
  });
});
