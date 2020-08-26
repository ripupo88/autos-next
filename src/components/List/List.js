import React from "react";

export const List = () => {
    return (
        <div className="card asdwda3 ml-auto mr-auto shadow-lg">
            <div className="card-header">
                <p>
                    <b>INFORMACIÓN</b>
                </p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-6">
                            <p>Marca:</p>
                        </div>
                        <div className="col-6">
                            <p> BMW</p>
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-6">
                            <p>Modelo:</p>
                        </div>
                        <div className="col-6">
                            <p> 320</p>
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-6">
                            <p>Año:</p>
                        </div>
                        <div className="col-6">
                            <p> 2017</p>
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-6">
                            <p>Kilometros:</p>
                        </div>
                        <div className="col-6">
                            <p> 32.696</p>
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-6">
                            <p>Potencia:</p>
                        </div>
                        <div className="col-6">
                            <p> 190CV</p>
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-6">
                            <p>Puestas:</p>
                        </div>
                        <div className="col-6">
                            <p> 5</p>
                        </div>
                    </div>
                </li>
            </ul>
            <style jsx>
                {`
                    .asdwda3 {
                        max-width: 25rem;
                    }
                    .asdwda3 p {
                        margin: 0;
                    }
                `}
            </style>
        </div>
    );
};
