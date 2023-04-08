import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ status, ...rest }) => {
    return (
        <>
            <button className="btn btn-light" {...rest}>
                <i className={"bi bi-suit-heart" + (status ? "-fill" : "")}></i>
            </button>
        </>
    );
};

Bookmark.propTypes = {
    status: PropTypes.bool
};

export default Bookmark;
