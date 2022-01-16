import React from "react";
import PropTypes from 'prop-types'

const ButtonGroup = ({ onSelectDashboard }) => {
    const changeData = (event) => {
        onSelectDashboard(event.target.value)
        console.log(event.target.value)
    };
    return (
        <>
            <button type='submit' value="page1" onClick={changeData}>Page 1</button>
            <button type='button' value="page2" onClick={changeData}>Page 2</button>
            <button type='button' value="page3" onClick={changeData}>Page 3</button>
            <button type='button' value="page4" onClick={changeData}>Page 4</button>
        </>

    );
}

export default ButtonGroup