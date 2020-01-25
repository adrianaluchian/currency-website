import React from "react";
import PropTypes from "prop-types";

const CurrencyDropdown = ({ label, currencies }) => {
    return (
        <div className="CurrencyDropdown">
            <label className="CurrencyDropdown-label">{label}</label>
            <select>
                {currencies.map(value =>
                    <option key={value} value={value}>{value}</option>)}
            </select>
        </div>
    );
};

CurrencyDropdown.propTypes = {
    label: PropTypes.string.isRequired,
    currencies: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default CurrencyDropdown;
