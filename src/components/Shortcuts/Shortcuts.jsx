import React from 'react';
import { Link } from 'react-router-dom';

const Shortcuts = () => {
    return (
        <div className="flex-display flex-dir-r card p10 w96Porc mt10 bcWhite flexa-jcsb">
            <div className="bloque bl mb30 flex-display flex-dir-r">
                <div className="notif-left ">
                    <ion-icon className="cPurple icoSize3m" style={{fontSize:'3em'}} name="mail-open-outline"></ion-icon>
                </div>
                <div className="notif-right">
                    <h4 className="mt4 textsize-3 fs-regular cBlue pl12em"><Link to="/notifications">Notificaciones</Link></h4>
                    <h4 className="mt4 textsize-3 fs-regular cBlue pl12em">is simply dum </h4>
                </div>
            </div>
            <div className="bloque bl mb30 flex-display flex-dir-r flexa-jcsb">
                <div className="notif-left ">
                    <ion-icon className="cPurple  icoSize3m" style={{fontSize:'3em'}}  name="bed-outline"></ion-icon>
                </div>
                <div className="notif-right">
                    <h4 className="mt4 textsize-3 fs-regular cBlue pl12em"><Link to="/hotels">Hotels</Link></h4>
                    <h4 className="mt4 textsize-3 fs-regular cBlue pl12em">is simply dum </h4>
                </div>
            </div>
            <div className="bloque bl mb30 flex-display flex-dir-r flexa-jcsb">
                <div className="notif-left ">
                    <ion-icon className="cPurple icoSize3m" style={{fontSize:'3em'}}  name="card-outline"></ion-icon>
                </div>
                <div className="notif-right">
                    <h4 className="mt4 textsize-3 fs-regular cBlue pl12em"><Link to="/payments">Pagos recibidos</Link></h4>
                    <h4 className="mt4 textsize-3 fs-regular cBlue pl12em">is simply dum </h4>
                </div>
            </div>
        </div>
    );
};

export default Shortcuts;
