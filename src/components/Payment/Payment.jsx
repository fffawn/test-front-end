import React from 'react';
import moment from 'moment';

const Payment = (props) => {
    return (
        <div className="payment-box">
            <div className="identification">Reservation #{props.payment.idReservation}</div>
            <div className="date">{moment(props.payment.date).format('ll')}</div>
            <hr />
            <div className="details">
                <span>{props.payment.price} | {props.payment.Payments}</span><br />
                <span>trx. id: {props.payment.id}</span>
            </div>
        </div>
    );
}

export default Payment;
