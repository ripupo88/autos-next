import React from "react";

export const Sec3 = () => {
    return (
        <div className="shadow-sm">
            <div className="cajatexto col-md-6"></div>
            <div className="cajatexto col-md-6 float-right">
                <h1>
                    financiacion del{" "}
                    <span className="num font-weight-bold">100%</span>
                </h1>
                <p>
                    Tenemos la financiacion que se ajusta a ti.{" "}
                    <span className="font-weight-bold num">1</span>
                </p>
                <div className="float-right">
                    <button className="btn btn-dark">CONDICIONES</button>
                </div>
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
                `}
            </style>
        </div>
    );
};
