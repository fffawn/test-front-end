import React, { Component } from 'react';
import Welcome from '../components/Welcome/Welcome';
import Shortcuts from '../components/Shortcuts/Shortcuts';
import Hotel from '../components/Hotel/Hotel';
import axios from 'axios';
import Notification from '../components/Notification/Notification';

export default class Home extends Component {

    /**
     * Constructor.
     */
    constructor(props) {
        super(props);

        this.state = {
            hotels: null,
            notifications: null,
            loading: true
        };
    }

    componentDidMount() {
        const API = 'http://localhost:3001';

        axios.get(`${API}/hotels`)
            .then((res) => {
                this.setState({
                    hotels: res.data
                });
            }).catch((err) => {
                console.error('ERROR: failed request to API on port 3001');
                alert('ERROR en la API');
        });

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


    render () {
        return (
            <>
                <div className="row flex-dir-c">
                    <Welcome />
                    <Shortcuts />
                    <h2 className="ml10px mt10 textsize-1 fs-sbold cBlack">Hoteles disponibles</h2>
                    <div className="row flex-dir-r w96Porc flex-wrap">
                        {
                            this.state.loading ?
                                'Cargando hoteles...' :
                                this.state.hotels.map(hotel => <Hotel hotel={hotel} />)
                        }
                    </div>
                </div>
                <div className="sectionRight mb10">
                    <h2 className="ml10px textsize-1 fs-sbold cBlack">Notificaciones</h2>
                    {
                        this.state.loading ?
                            'Cargando notificaciones...' :
                            this.state.notifications.map(notif => <Notification notification={notif} />)
                    }
                </div>
            </>
        );
    }
};
