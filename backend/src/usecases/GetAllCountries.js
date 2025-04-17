class GetAllCountries {
    constructor(countryRepository) {
      this.countryRepository = countryRepository;
    }
  
    async execute() {
      return await this.countryRepository.fetchAll();
    }
  }
  
  module.exports = GetAllCountries;  