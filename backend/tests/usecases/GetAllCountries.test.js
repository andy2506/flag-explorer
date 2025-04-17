const GetAllCountries = require('../../src/usecases/GetAllCountries');

describe('GetAllCountries Use Case', () => {
  it('should return a list of countries', async () => {
    const mockRepo = {
      fetchAll: jest.fn().mockResolvedValue([
        { name: 'South Africa', flag: 'https://flagcdn.com/za.svg' },
      ])
    };

    const usecase = new GetAllCountries(mockRepo);
    const result = await usecase.execute();

    expect(result.length).toBe(1);
    expect(result[0].name).toBe('South Africa');
  });
});
