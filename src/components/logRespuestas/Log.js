import React from "react";

export default class Log extends React.Component {
    
    mostrarHistorial() {
        return Object.keys(this.props.logRespuestas).map(keyOpcion => {
            
            return (<li key={keyOpcion}>
                
                    <h3><span className="mayusculas">{this.props.logRespuestas[keyOpcion].key}</span> : {this.props.logRespuestas[keyOpcion].value}</h3>
                
                </li>);
        });
    }

    render() {
        return (
            <div className="opciones">
                <h3>Historial de opciones elegidas</h3>
                <ul>
                    {this.mostrarHistorial()}
                </ul>
            </div>
        );
    }
}
