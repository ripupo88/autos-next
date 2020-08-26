import React, { useState } from "react";
import LightBox, { Modal, ModalGateway } from "react-images";
var Carouselapp = require("react-responsive-carousel").Carousel;

export const Carousel = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    console.log(modalIsOpen);
    const images = [
        {
            src:
                "https://photohd.gestionaleauto.com/simionato/13773960_O_5f3fd962a9bbb.jpg",
        },
        {
            src:
                "https://photohd.gestionaleauto.com/simionato/13773960_O_5f3fd962a9bbb.jpg",
        },
    ];
    return (
        <>
            <Carouselapp
                showArrows={true}
                // onChange={onChange}
                // onClickItem={() => setModalIsOpen(true)}
                // onClickThumb={onClickThumb}
                infiniteLoop
            >
                <div>
                    <img src="https://photohd.gestionaleauto.com/simionato/13773960_O_5f3fd962a9bbb.jpg" />
                    <button
                        onClick={() => setModalIsOpen(true)}
                        className="legend"
                    >
                        <img src="./assets/icons/zoom.svg" />
                    </button>
                </div>
                <div>
                    <img src="https://photohd.gestionaleauto.com/simionato/13773960_O_5f3fd962a9bbb.jpg" />
                    <button
                        onClick={() => setModalIsOpen(true)}
                        className="legend"
                    >
                        <img src="./assets/icons/zoom.svg" />
                    </button>
                </div>
                <div>
                    <img src="https://photohd.gestionaleauto.com/simionato/13773960_O_5f3fd962a9bbb.jpg" />
                    <button
                        onClick={() => setModalIsOpen(true)}
                        className="legend"
                    >
                        <img src="./assets/icons/zoom.svg" />
                    </button>
                </div>
                <div>
                    <img src="https://photohd.gestionaleauto.com/simionato/13773960_O_5f3fd962a9bbb.jpg" />
                    <button
                        onClick={() => setModalIsOpen(true)}
                        className="legend"
                    >
                        <img src="./assets/icons/zoom.svg" />
                    </button>
                </div>
                <div>
                    <img src="https://photohd.gestionaleauto.com/simionato/13773960_O_5f3fd962a9bbb.jpg" />
                    <button
                        onClick={() => setModalIsOpen(true)}
                        className="legend"
                    >
                        <img src="./assets/icons/zoom.svg" />
                    </button>
                </div>
                <div>
                    <img src="https://photohd.gestionaleauto.com/simionato/13773960_O_5f3fd962a9bbb.jpg" />
                    <button
                        onClick={() => setModalIsOpen(true)}
                        className="legend"
                    >
                        <img src="./assets/icons/zoom.svg" />
                    </button>
                </div>
            </Carouselapp>
            <ModalGateway>
                {modalIsOpen ? (
                    <Modal onClose={() => setModalIsOpen(false)}>
                        <LightBox views={images} />
                    </Modal>
                ) : null}
            </ModalGateway>
        </>
    );
};
