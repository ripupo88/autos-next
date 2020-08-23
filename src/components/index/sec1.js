import React from "react";

export const Sec1 = () => {
    return (
        <div className="m-5">
            <h1>Coches de ocacion</h1>
            <div className="cajatexto col-md-6">
                <p>
                    Contamos con una excelente coleccion de coches de segunda
                    mano que se encuentran en unas condiciones excelentes y que
                    han sido cuidadosamente probados y revisados hasta el mas
                    minimo detalle para que te lo puedas llevaar con toda
                    confianza
                </p>
            </div>
            <img className="w-100" src="./assets/img/cars.png" />
            <style jsx>
                {`
                    h1 {
                        font-size: 60px;
                    }
                    .cajatexto {
                        color: rgba(0, 0, 0, 5);
                        text-align: justify;
                    }
                `}
            </style>
        </div>
    );
};
