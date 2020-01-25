import superagent from 'superagent';
import settings from '../settings';

async function getCurrencies () {
    const { body } = await superagent
        .get(`${settings.currencyApiUrl}/currencies`);

    return body;
}

export default {
    getCurrencies
};
