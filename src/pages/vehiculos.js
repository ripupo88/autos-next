import { Carousel } from "../components/carousel/Carousel";
import { List } from "../components/List/List";
import { Detalles } from "../components/detalles/detalles";

export default function Vehiculos() {
    return (
        <>
            <div className="col-12 bg-dark text-white-50">
                <h1 className="text-center mt-3 mb-3">
                    BMW 320 <small>(2017)</small>
                    <small>
                        <b className="float-right mt-3 mb-3 text-light">
                            €9.800
                        </b>
                    </small>
                </h1>
            </div>

            <div className="col-xl-8 ">
                <Carousel />
            </div>
            <div className="col-xl-4 pt-3 pb-3">
                <List />
            </div>

            <div className="col-12">
                <h2>Detalles y Equipacion</h2>
                <div className="mt-5 mb-5">
                    <Detalles />
                </div>
            </div>
        </>
    );
}
