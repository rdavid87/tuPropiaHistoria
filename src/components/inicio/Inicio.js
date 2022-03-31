import data from '../data.json';
import React from 'react';
import Historia from '../historias/Historia';
import Log from '../logRespuestas/Log';

export default class Inicio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            logRespuestas: [],
            historia: data[0],
            finDeHistoria: null,
            previa: null,
        };
    }

    addHistoriaHistorial = (opcionMarcada, historiaActual) => {
  
        this.setState({ previa: opcionMarcada });

        let myLogRespuestas = this.state.logRespuestas;
        myLogRespuestas.push(opcionMarcada);
        this.setState({ logRespuestas: myLogRespuestas });
        
        let keyNextHistoria = (this.getNumber(opcionMarcada.historiaId)+1)+""+opcionMarcada.key;
        let historiaSiguiente = data.find(historia => historia.id === keyNextHistoria);
        let finHistoria = data.find(historia => historia.id === (this.getNumber(keyNextHistoria)+1)+""+opcionMarcada.key);


        this.setState({ finDeHistoria: finHistoria });
        this.setState({ historia: historiaSiguiente });

    }

    muestraPrevia =()=> {
            return (
                <h3>Selección Anterior: <span className="mayusculas">{this.state.previa.key}</span> : {this.state.previa.value}</h3>
            );
    }


    //devuelve numero de un string
    getNumber(str) {
        return +str.replace(/\D/g, '')*1;
    }


    render() {
        return (
            <div className="layout">
                <Historia addHistoriaHistorial={this.addHistoriaHistorial} 
                    historia={this.state.historia} 
                    finDeHistoria={this.state.finDeHistoria} />
                
                    {this.state.previa !== null ? this.muestraPrevia() : null}
                <hr className="linea" />
                <Log logRespuestas={this.state.logRespuestas} />
            </div>


        );
    }
}
