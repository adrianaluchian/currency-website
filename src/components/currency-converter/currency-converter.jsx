import React, { useState, useEffect } from 'react';
import CurrencyInput from '../currency-input/currency-input';
import CurrencyDropdown from '../currency-dropdown/currency-dropdown';
import currencyApiClient from '../../api-clients/currency-api-client';

const CurrencyConverter = () => {
    const [currencies, setCurrencies] = useState([]);

    const loadCurrencies = async () => {
        const result = await currencyApiClient.getCurrencies();
        setCurrencies(result);
    };

    useEffect(() => {
        loadCurrencies();
    }, []);

    return (
        <section className="CurrencyConverter">
            <div className="CurrencyConverter-content">

                <div className="CurrencyConverter-item">
                    <CurrencyInput label={'Convert'} />
                </div>

                <div className="CurrencyConverter-item">
                    <CurrencyDropdown label={'from'} currencies={currencies} />
                </div>

                <div className="CurrencyConverter-item">
                    <CurrencyDropdown label={'to'} currencies={currencies} />
                </div>

                <div className="CurrencyConverter-item">
                    <button className="CurrencyConverter-button">=></button>
                </div>

                <div className="CurrencyConverter-item">
                    <CurrencyInput readonly />
                </div>
            </div>
        </section>
    );
};

export default CurrencyConverter;
