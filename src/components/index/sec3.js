import React from "react";

export const Sec3 = () => {
    return (
        <div className="shadow-sm">
            <div className="row m-0 p-0">
                <div className="cajatexto col-md-6 m-0 p-0">
                    <div className="errsweesw w-100 ">
                        <img
                            className="shadow-sm m-0 p-0 img-fluid"
                            src="./assets/img/llave.jpg"
                        />
                    </div>
                </div>
                <div className="cajatexto col-md-6 float-right">
                    <h1>
                        financiacion del{" "}
                        <span className="num font-weight-bold">100%</span>
                    </h1>
                    <p>Tenemos la financiacion que se ajusta a ti.</p>

                    <button className="btn btn-dark">CONDICIONES</button>
                </div>
                <style jsx>
                    {`
                        .num {
                            font-size: 100px;
                        }
                        .Sdeaa {
                            text-align: right;
                        }
                        .cajatexto p {
                            text-align: justify;
                        }
                        .errsweesw img {
                        }
                    `}
                </style>
            </div>
        </div>
    );
};
