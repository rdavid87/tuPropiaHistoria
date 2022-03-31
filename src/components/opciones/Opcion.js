import React from 'react';
import Swal from "sweetalert2";

export default class Opcion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            miSeleccion: null,
        };
    }


    handleOnClick(opcionMarcada) {
        
        this.setState({ miSeleccion: opcionMarcada });
        //console.log("finDeHistoria",this.props.finDeHistoria);
        if(this.props.finDeHistoria !== undefined) {
            this.props.addHistoriaHistorial(opcionMarcada, this.props.historia);
        }
    }

    componentDidUpdate(prevProps) {

        if(prevProps.finDeHistoria === undefined) {
            Swal.fire({
                title: '¡Felicidades!',
                text: 'Has terminado la historia',
                icon: 'success',
                confirmButtonText: 'Volver a empezar' 
            }).then((result) => {
                if (result.value) {
                    window.location.reload();
                }
            });
        }

    }

    creaOpciones() {
        return Object.keys(this.props.historia.opciones).map(keyOpcion => {
            let opcion = { key:keyOpcion, 
                            value: this.props.historia.opciones[keyOpcion], 
                            historiaId: this.props.historia.id, 
                            historiaName: this.props.historia.historia
                        };
            console.log("opcion",opcion);
            
            return (<li key={opcion} className="opcion" onClick={() => this.handleOnClick(opcion)}>
                <button className="botones">{opcion.key}</button>
                 <h2>{opcion.value}</h2>
                
                </li>);
        });
    }

    render() {
        return (
            <div className="opciones">
                <ul>
                    {this.creaOpciones()}
                </ul>
            </div>
        );
    }
}


