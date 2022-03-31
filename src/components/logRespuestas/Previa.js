import React from "react";

export default class Log extends React.Component {
    
    mostrarHistorial() {
        return Object.keys(this.props.logRespuestas).map(keyOpcion => {
            
            return (<li key={keyOpcion}>
                
                    <h2><span className="mayusculas">{this.props.logRespuestas[keyOpcion].key}</span> : {this.props.logRespuestas[keyOpcion].value}</h2>
                
                </li>);
        });
    }

    render() {
        return (
            <div className="opciones">
                <ul>
                    {this.mostrarHistorial()}
                </ul>
            </div>
        );
    }
}
