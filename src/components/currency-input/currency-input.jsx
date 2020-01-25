import React from "react";
import PropTypes from "prop-types";

const CurrencyInput = ({ label, readonly }) => {
    return (
        <div className="CurrencyInput">
            <label className="CurrencyInput-label">{label}</label>
            <input readOnly={readonly} className="CurrencyInput-input" />
        </div>
    );
};

CurrencyInput.propTypes = {
    label: PropTypes.string,
    readonly: PropTypes.bool
};

export default CurrencyInput;
