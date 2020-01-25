import React from "react";
import PropTypes from "prop-types";
import { DebounceInput } from "react-debounce-input";

const CurrencyInput = ({ label, value, readonly, onChange }) => {
    const handleOnChange = event => {
        if (typeof onChange === 'function') {
            onChange(event.target.value);
        }
    };

    return (
        <div className="CurrencyInput">
            <label className="CurrencyInput-label">{label}</label>
            <div className="CurrencyInput-input">
                <DebounceInput
                    minLength={2}
                    debounceTimeout={500}
                    onChange={handleOnChange}
                    disabled={readonly}
                    type={"number"}
                    value={value} />
            </div>
        </div>
    );
};

CurrencyInput.propTypes = {
    label: PropTypes.string,
    readonly: PropTypes.bool,
    value: PropTypes.number,
    onChange: PropTypes.func
};

export default CurrencyInput;
