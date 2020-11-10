import React, { Component } from 'react';
import Notification from '../components/Notification/Notification';
import axios from "axios";
import '../css/customs.css';

export default class Notifications extends Component {
    /**
     * Constructor.
     */
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            notifications: null
        };
    }

    componentDidMount() {
        const API = 'http://localhost:3001';

        axios.get(`${API}/notifications`)
            .then((res) => {
                this.setState({
                    loading: false,
                    notifications: res.data
                });
            }).catch((err) => {
            console.error('ERROR: failed request to API on port 3001');
            alert('ERROR en la API');
        });
    }

    render(){
        return (
            <div className="notif-view-box">
                <h2 className="ml10px textsize-1 fs-sbold cBlack">Notificaciones</h2><br /><br />
                <div>
                {
                    this.state.loading ?
                        'Cargando notificaciones...' :
                        this.state.notifications.map(notif => <Notification notification={notif} />)
                }
                </div>
            </div>
        );
    }
}
