const request = require('supertest');
const app = require('../../src/config/express');

describe('GET /countries', () => {
  it('should return a list of countries', async () => {
    const res = await request(app).get('/countries');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body[0]).toHaveProperty('name');
    expect(res.body[0]).toHaveProperty('flag');
  });
});
