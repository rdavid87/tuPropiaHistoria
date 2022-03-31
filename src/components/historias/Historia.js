import React from 'react';
import Opciones from '../opciones/Opcion';

export default class Historia extends React.Component {

    render() {
        return (
            <div className="historia">
                <h1>{this.props.historia.historia}</h1>
                <Opciones addHistoriaHistorial={this.props.addHistoriaHistorial} 
                historia={this.props.historia}
                finDeHistoria={this.props.finDeHistoria} />
            </div>
        );
    }
}
