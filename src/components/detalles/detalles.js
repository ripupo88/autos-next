import React from "react";
import "./detalles.module.scss";

export const Detalles = () => {
    return (
        <div className="listamain ml-auto mr-auto">
            <ul>
                <li>
                    <div className="row">
                        <div className="col-6">
                            <p>Ordenador a bordo</p>
                        </div>
                        <div className="col-6">
                            <p>Sistema ABS</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="row">
                        <div className="col-6">
                            <p>Volante Multifuncion</p>
                        </div>
                        <div className="col-6">
                            <p>Direccion asistida</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="row">
                        <div className="col-6">
                            <p>Techo panoramico</p>
                        </div>
                        <div className="col-6">
                            <p>Asistente en pendiente</p>
                        </div>
                    </div>
                </li>
            </ul>
            <style jsx>
                {`
                    .listamain {
                        max-width: 600px;
                    }
                    li {
                        list-style: none;
                    }
                    .col-6::before {
                        content: url("./assets/icons/checked.png");
                        float: left;
                    }
                `}
            </style>
        </div>
    );
};
