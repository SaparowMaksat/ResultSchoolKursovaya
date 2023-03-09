import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import API from "../api";
import QualitiesList from "./qualitiesList";

const UserPage = ({ userId }) => {
    const history = useHistory();
    const [user, setUser] = useState();

    useEffect(() => {
        API.users.getById(userId).then((data) => setUser(data));
    }, []);

    const handleClick = () => {
        history.push("/users");
    };

    if (user) {
        return (
            <div className="m-2">
                <h1>{user.name}</h1>
                <h2>Профессия: {user.profession.name}</h2>
                <QualitiesList qualities={user.qualities} />
                <p>completedMeetings: {user.completedMeetings}</p>
                <h2>Rate: {user.rate}</h2>
                <button onClick={handleClick} className="btn btn-primary">
                    Все Пользователи
                </button>
            </div>
        );
    } else {
        return <h1>Loading</h1>;
    }
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;
