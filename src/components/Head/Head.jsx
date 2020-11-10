import React from 'react';
import { Link } from 'react-router-dom';

const Head = () => {
    return(
        <div className="cardTop bcWhite flex-display flex-dir-r flexa-jcsb">
            <div>
                <h2>Dashboard</h2>
            </div>
            <div>
                <Link to="/search"><a className="mr2em" href="#"><ion-icon className="icoGray" name="search-outline"></ion-icon></a></Link>
                <Link to="/notifications"><a className="mr2em" href="#"><ion-icon className="icoGray" name="mail-unread-outline"></ion-icon></a></Link>
                <Link to="/settings"><a className="mr2em" href="#"><ion-icon className="icoGray" name="settings-outline"></ion-icon></a></Link>
            </div>
        </div>
    );
};

export default Head;
