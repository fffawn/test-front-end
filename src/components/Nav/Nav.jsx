import React from 'react';
import { Link } from 'react-router-dom';
import IosAnalyticsOutline from 'react-ionicons/lib/IosAnalyticsOutline';
import IosMailOutline from 'react-ionicons/lib/IosMailOutline';
import IosCard from 'react-ionicons/lib/IosCard';
import IosAppsOutline from 'react-ionicons/lib/IosAppsOutline';
import IosExitOutline from 'react-ionicons/lib/IosExitOutline';

const Nav = () => {
    return(
        <nav className="h100vh w60 panel bcPurple flexa-jcsb flexa-ai">
            <div className="panel">
                {/* HOME */}
                <a className="mt10 mb30 h50px" href="#"><Link to='/'><IosAnalyticsOutline className="cWhite" fontSize="35px" color="#C9C9C9" beat={true}/></Link></a>
                {/* HOTELS   */}
                <a className="mt30" href="#"><Link to='/hotels'><IosAppsOutline className="cWhite" fontSize="35px" color="#C9C9C9"/></Link></a>
                {/* NOTIFICATIONS */}
                <a className="mt30" href="#"><Link to='/notifications'><IosMailOutline className="cWhite" fontSize="35px" color="#C9C9C9"/></Link></a>
                {/* PAYMENTS */}
                <a className="mt30" href="#"><Link to='/payments'><IosCard className="cWhite" fontSize="35px" color="#C9C9C9"/></Link></a>
            </div>
            <a className="mb10" href="#"><IosExitOutline fontSize="35px" color="#C9C9C9"/></a>
        </nav>
    );
};

export default Nav;
