import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ status, ...rest }) => {
    return (
        <>
            <button className="btn btn-light" {...rest}>
                <i
                    className={
                        "bi bi-suit-heart" +
                        (status ? "bi bi-suit-heart-fill" : "")
                    }
                ></i>
            </button>
        </>
    );
};

Bookmark.propTypes = {
    status: PropTypes.bool,
    rest: PropTypes.func
};

export default Bookmark;
