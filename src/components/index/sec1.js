import React from "react";

export const Sec1 = () => {
    return (
        <div className="shadow-sm">
            <div className="col-md-3 "></div>
            <div className="cajatexto col-md-6 ml-4">
                <h1>Vehículos de ocación</h1>
                <p>
                    Contamos con una excelente coleccion de coches de segunda
                    mano que se encuentran en unas condiciones excelentes y que
                    han sido cuidadosamente probados y revisados hasta el mas
                    minimo detalle para que te lo puedas llevaar con toda
                    confianza
                </p>
                <div className="float-right">
                    <button className="btn btn-dark">EXPOSICION</button>
                </div>
            </div>
            <div className="col-md-3 "></div>

            <div className="col-md-12 pt-5">
                <img className="w-100" src="./assets/img/cars.png" />
            </div>
            <style jsx>
                {`
                    .cajatexto p {
                        text-align: justify;
                    }
                `}
            </style>
        </div>
    );
};
