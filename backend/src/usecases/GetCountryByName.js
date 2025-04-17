class GetCountryByName {
    constructor(countryRepository) {
      this.countryRepository = countryRepository;
    }
  
    async execute(name) {
      return await this.countryRepository.fetchByName(name);
    }
  }
  
  module.exports = GetCountryByName;  