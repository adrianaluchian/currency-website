import superagent from 'superagent';
import settings from '../settings';

async function getCurrencies () {
    try {
        const { body } = await superagent
            .get(`${settings.currencyApiUrl}/currencies`);
        return body;
    } catch (error) {
        console.log('Error getting currencies: ', error);
        throw error;
    }
}

async function convert (payload) {
    try {
        const { body } = await superagent
            .post(`${settings.currencyApiUrl}/currencies/convert`)
            .set('Accept', 'application/json')
            .send(payload);
        return body;
    } catch (error) {
        console.log('Error converting currencies: ', error);
        throw error;
    }
}

export default {
    getCurrencies,
    convert
};
