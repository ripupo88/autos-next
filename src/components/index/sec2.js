import React from "react";

export const Sec2 = () => {
    return (
        <div className="shadow-sm hctKJM">
            <div className="cKJzHK"></div>

            <div className="cajatexto col-md-6">
                <h2>Con garantia</h2>
                <p>
                    Confiamos en nuestros vehiculos y queremos que vayas a casa
                    con la confianza de saber que te garantizamos tu vehiculo{" "}
                    <span className="font-weight-bold">por un año.</span>{" "}
                    Nuestro compromiso es tu tranquilidad y trabajamos para eso
                </p>
                <div className="float-right">
                    <button className="btn btn-dark">CONDICIONES </button>
                </div>
            </div>

            <style jsx>
                {`
                    .cajatexto p {
                        text-align: justify;
                    }
                    .cKJzHK {
                        background-image: url("./assets/img/bg1.jpg");
                        background-size: cover;
                        opacity: 0.3;
                        height: 70vh;
                        background-color: black;
                        width: 100%;
                        position: absolute;
                        z-index: -1;
                        right: 0px;
                        top: 0px;
                        background-position: center center;
                        background-repeat: no-repeat;
                    }
                    .hctKJM {
                        position: relative;
                        min-height: 70vh;
                        z-index: 1;
                        padding: 90px 30px;
                    }
                `}
            </style>
        </div>
    );
};
