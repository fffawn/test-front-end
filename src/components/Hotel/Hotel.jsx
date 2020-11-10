import React, { Component } from 'react';
import Modal from 'react-modal';

export default class Hotel extends Component {
    /**
     * Constructor.
     */
    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        }
    }

    render() {
        return (
            <>
                <Modal
                    isOpen={this.state.showModal}
                    style={{'z-index': '99999'}}
                >
                    <div className={'card row flex-dir-c flexa-jcsb flexa-ai p10 img wMin150 hMin150 m2px mt10 bcWhite imghotel-' + this.props.hotel.id}>
                        <h2 className="textsize-1 fs-sbold cWhite">{this.props.hotel.name}</h2>
                        <a href="#" className="btn bcPurple" onClick={() => this.setState({ showModal: false })}>Cerrar</a>
                    </div>
                </Modal>
                <div className={'card row flex-dir-c flexa-jcsb flexa-ai p10 img wMin150 hMin150 m2px mt10 bcWhite imghotel-' + this.props.hotel.id}>
                    <h2 className="textsize-1 fs-sbold cWhite">{this.props.hotel.name}</h2>
                    <a href="#" className="btn bcPurple" onClick={() => this.setState({ showModal: true })}>Reservar</a>
                </div>
            </>
        )
    }
}
