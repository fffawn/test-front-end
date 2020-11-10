import React, { Component } from 'react';
import Hotel from '../components/Hotel/Hotel';
import axios from "axios";
import '../css/customs.css';

export default class Hotels extends Component {
    /**
     * Constructor.
     */
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            hotels: null,
            search: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ search: event.target.value });
    }

    componentDidMount() {
        const API = 'http://localhost:3001';

        axios.get(`${API}/hotels`)
            .then((res) => {
                this.setState({
                    loading: false,
                    hotels: res.data
                });
            }).catch((err) => {
            console.error('ERROR: failed request to API on port 3001');
            alert('ERROR en la API');
        });
    }

    render(){
        return (
            <>
                <div className="notif-view-box">
                    <h2 className="ml10px textsize-1 fs-sbold cBlack">Hoteles</h2><br /><br />
                    <hr />
                    <div className="searcher">
                        <form>
                            <input style={{'width':'100%'}} type="text" value={this.state.search} placeholder="Busca hotel por nombre..." onChange={this.handleChange} />
                        </form>
                    </div>
                    <hr />
                    <div>
                        {
                            this.state.loading ?
                                'Cargando hoteles...' :
                                this.state.hotels.filter(hotel => this.state.search !== '' ? hotel.name.toLowerCase().includes(this.state.search.toLowerCase()) : hotel.name).map(hotel => <Hotel hotel={hotel} />)
                        }
                    </div>
                </div>
            </>
        );
    }
}
