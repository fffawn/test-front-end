import React from 'react';
import moment from 'moment';

const Notification = (props) => {
    return (
        <div className="notification mb30">
            <div className="notif-left flex-display flexa-jcsb">
                {/* <ion-icon className="icoGray" name="mail-open-outline"></ion-icon> */}
                <h4 className="textsize-3">#{props.notification.id} {moment(props.notification.date).format('ll')}</h4>
            </div>
            <div className="notif-right">
                <h4 className="mt4 textsize-2 fs-regular cBlue">{props.notification.fromUser.name}</h4>
                <p className="mt4 textsize-3 cGray">{props.notification.content}</p>
            </div>
        </div>
    );
}

export default Notification;
