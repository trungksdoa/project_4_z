import React from 'react';

import Topbar from './Topbar.jsx';

import MiddleBar from './middleBar.jsx'

import NavigationBar from './navigation.jsx';

const header = (props) => {
    console.log(props);
    //Logic here
    return (
        <header id="tg-header" className="tg-header tg-haslayout">
            {<Topbar />}
            {<MiddleBar />}
            {<NavigationBar />}
        </header>
    )
}
export default header;