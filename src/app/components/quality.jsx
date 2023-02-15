import PropTypes from "prop-types";
import React from "react";

const Quality = ({ color, name }) => {
    return <span className={"badge m-1 bg-" + color}>{name}</span>;
};

Quality.propTypes = {
    color: PropTypes.string,
    name: PropTypes.string
};

export default Quality;
