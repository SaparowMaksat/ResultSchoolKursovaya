import React from "react";
import PropTypes, { node } from "prop-types";

function CheckBoxField({ value, name, onChange, children, error }) {
    const handleChange = () => {
        onChange({ name: name, value: !value });
    };

    const getInputClasses = () => {
        return "form-check-input" + (error ? " is-invalid" : "");
    };

    return (
        <div className="form-check mb-4">
            <input
                className={getInputClasses()}
                type="checkbox"
                checked={value}
                value=""
                id={name}
                onChange={handleChange}
            />
            <label className="form-check-label" htmlFor={name}>
                {children}
            </label>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
}

CheckBoxField.propTypes = {
    value: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.arrayOf(node), PropTypes.node]),
    name: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default CheckBoxField;
