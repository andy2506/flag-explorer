class CountryController {
    constructor(getAllCountriesUseCase, getCountryByNameUseCase) {
      this.getAllCountries = getAllCountriesUseCase;
      this.getCountryByName = getCountryByNameUseCase;
    }
  
    async handleGetAll(req, res) {
      const countries = await this.getAllCountries.execute();
      res.json(countries);
    }
  
    async handleGetByName(req, res) {
      const name = req.params.name;
      const country = await this.getCountryByName.execute(name);
      res.json(country);
    }
  }
  
  module.exports = CountryController;  