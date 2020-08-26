import React from "react";

export const Sec3 = () => {
    return (
        <div className="row m-0 p-0 shadow-sm pb-5">
            <div className="cajatexto col-md-6 m-0 p-0 text-right">
                <div className="errsweesw w-100 p-5 mr-2 ml-auto">
                    <img
                        className="shadow-sm m-0 p-0 img-fluid"
                        src="./assets/img/llave.jpg"
                        alt="entragando llave"
                    />
                </div>
            </div>
            <div className="cajatexto col-md-6 float-right">
                <h1>
                    financiacion del <br />
                    <span className="num font-weight-bold">100%</span>
                </h1>
                <p>Tenemos la financiacion que se ajusta a ti.</p>

                <button className="btn btn-light">CONDICIONES</button>
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
                        border-radius: 5px;
                    }
                `}
            </style>
        </div>
    );
};
