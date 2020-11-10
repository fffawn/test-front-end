import React, { Component } from 'react';
import axios from "axios";
import '../css/customs.css';
import Payment from '../components/Payment/Payment';

export default class Payments extends Component {
    /**
     * Constructor.
     */
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            payments: null
        };
    }

    componentDidMount() {
        const API = 'http://localhost:3001';

        axios.get(`${API}/payments`)
            .then((res) => {
                this.setState({
                    loading: false,
                    payments: res.data
                });
            }).catch((err) => {
            console.error('ERROR: failed request to API on port 3001');
            alert('ERROR en la API');
        });
    }

    render(){
        return (
            <div className="notif-view-box">
                <h2 className="ml10px textsize-1 fs-sbold cBlack">Payments</h2><br /><br />
                <div className="payment-container">
                    {
                        this.state.loading ?
                            'Cargando pagos...' :
                            this.state.payments.map(payment => <Payment payment={payment} />)
                    }
                </div>
            </div>
        );
    }
}
