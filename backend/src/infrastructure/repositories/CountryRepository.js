const axios = require('axios');
const { REST_COUNTRIES_BASE_URL } = require('../../config/api');
const Country = require('../../domain/entities/Country');
const CountryDetails = require('../../domain/entities/CountryDetails');

class CountryRepository {
    //fetch all the countries
    async fetchAll() {
        try {
            const res = await axios.get(`${REST_COUNTRIES_BASE_URL}/all`);
            return res.data.map(c => new Country(c.name.common, c.flags.svg));
        }catch (error) {
            console.error('Error fetching countries:', error.message);
            throw new Error('Unable to fetch countries from external API.');
        }
    }

    //fetch the country by name
    async fetchByName(name) {
        try {
            const res = await axios.get(`${REST_COUNTRIES_BASE_URL}/name/${name}`);
            const c = res.data[0];
            return new CountryDetails(
                c.name.common,
                c.population,
                c.capital ? c.capital[0] : 'N/A',
                c.flags.svg
            );
        }catch (error) {
            console.error(`Error fetching country "${name}":`, error.message);
            throw new Error(`Unable to fetch country details for "${name}"`);
        }
    }
}

module.exports = CountryRepository;