import { useState } from "react";

import { Tabs, Tab, Image } from "@nextui-org/react";
import { Modal, ModalContent, ModalBody } from "@nextui-org/react";


import { HiOutlinePhoto } from "react-icons/hi2";
import { LuHotel, LuCalendarClock, LuPartyPopper } from "react-icons/lu";
import { IoPricetagsOutline } from "react-icons/io5";
import { FaPersonRunning, FaSprayCanSparkles } from "react-icons/fa6";
import { MdOutlineCalendarToday, MdAirplanemodeActive } from "react-icons/md";
import { BsPeopleFill, BsFillGeoAltFill, BsFillBagFill } from "react-icons/bs";
import { FaRegStar, FaBus } from "react-icons/fa";
import { GiColiseum } from "react-icons/gi";
import { IoIosRestaurant } from "react-icons/io";
import { MdOutlineCalendarMonth } from "react-icons/md";


import roma from '../assets/imgs/roma.jpg'
import hotel from '../assets/imgs/hotel.jpg'

import galery1 from '../assets/imgs/galery1.jpg'
import galery3 from '../assets/imgs/galery3.webp'
import galery4 from '../assets/imgs/galery4.jpeg'
import galery5 from '../assets/imgs/galery5.webp'
import galery6 from '../assets/imgs/galery6.webp'



function CardPack() {
    const [modalContent, setModalContent] = useState(false)

    const tabs_list = [
        {
            id: 'price',
            label: 'Precio',
            icon: <IoPricetagsOutline />,
            content: <div className="p-2 flex flex-col justify-around gap-4 max-w-[600px] w-full" >
                <h2 className="font-semibold text-white text-2xl text-start">
                    <span className="bg-orange-600 py-2 px-4 rounded-lg">Precio Oferta</span>
                </h2>
                <div className="flex flex-col gap-4 justify-center items-center">
                    <p className="font-bold text-5xl italic text-neutral-500 line-through">$99,99</p>
                    <p className="font-bold text-5xl  ">$89,99</p>
                </div>

                <div className="text-xl text-neutral-500 text-end">
                    <div className="flex items-center justify-end gap-2">
                        <BsPeopleFill />
                        2 Adultos
                    </div>
                    <div className="flex items-center justify-end gap-2">
                        <MdOutlineCalendarToday />
                        7 dias - 6 noches
                    </div>
                    <div className="flex items-center justify-end gap-2">
                        <MdAirplanemodeActive />
                        Aeropuerto, Ezeiza
                    </div>
                    <div className="flex items-center justify-end gap-2">
                        <LuCalendarClock />
                        Sabado 8am
                    </div>
                </div>
            </div>
        },
        {
            id: 'hotel',
            label: 'Hotel',
            icon: <LuHotel />,
            content: <div className="p-2 flex flex-col gap-4">
                <div className="flex max-sm:flex-col max-sm:items-center gap-4">
                    <div className=" w-1/3 ">
                        <Image
                            isZoomed
                            src={hotel}
                            className="object-cover"
                        />
                    </div>

                    <div className="text-2xl pt-4 flex flex-col gap-2 max-sm:items-center">
                        <div className="font-bold text-start">
                            HS 311
                        </div>
                        <div className="flex gap-2">
                            3
                            <FaRegStar className="text-yellow-400" />
                        </div>
                        <div className="flex gap-2 break-all">
                            <BsFillGeoAltFill />
                            Via Cavour 311, Rione Monti
                        </div>
                    </div>
                </div>

                <div className="break-all">
                    Estacionamiento,
                    Wifi gratis,
                    Traslados (aeropuerto),
                    Habitaciones familiares,
                    Habitaciones para no fumadores,
                    Recepcion 24 horas,
                    Adaptado para personas con movilidad reducida,
                    Tetera/cafetera en todas las habitaciones,
                    Bar,
                    Buen desayuno
                </div>

            </div>
        },
        {
            id: 'activities',
            label: 'Actividades',
            icon: <FaPersonRunning />,
            content: <div className="text-3xl flex flex-wrap gap-8 pt-4 h-full">
                <div className="flex gap-2 ">
                    <GiColiseum />
                    Visita al coliseo
                </div>
                <div className="flex gap-2 ">
                    <IoIosRestaurant />
                    3 Restaurantes
                </div>
                <div className="flex gap-2 ">
                    <BsFillBagFill />
                    Paseo de compras
                </div>
                <div className="flex gap-2 ">
                    <FaBus />
                    Paseo en bus
                </div>
                <div className="flex gap-2 ">
                    <LuPartyPopper />
                    Noches de boliche
                </div>
                <div className="flex gap-2 ">
                    <FaSprayCanSparkles />
                    Dia de spa
                </div>
                <div className="flex gap-2 ">
                    <MdOutlineCalendarMonth />
                    Visitas a puntos turisticos
                </div>

            </div>
        },
        {
            id: 'galery',
            label: 'Galeria',
            icon: <HiOutlinePhoto />,
            content: <div className="grid grid-cols-5 grid-rows-5 gap-1">
                <div className="col-span-2 row-span-2 bg-danger-50">
                    <Image
                        src={galery1}
                        radius="none"
                        removeWrapper
                        className="object-cover h-full cursor-zoom-in"
                        onClick={() => setModalContent(galery1)}
                    />
                </div>
                <div className="col-span-3 row-span-2">
                    <Image
                        src={galery4}
                        radius="none"
                        removeWrapper
                        className="object-cover h-full cursor-zoom-in"
                        onClick={() => setModalContent(galery4)}
                    />
                </div>
                <div className="col-span-3 row-span-2">
                    <Image
                        src={galery6}
                        radius="none"
                        removeWrapper
                        className="object-cover h-full cursor-zoom-in"
                        onClick={() => setModalContent(galery6)}
                    />
                </div>
                <div className="col-span-2 row-span-2">
                    <Image
                        src={galery3}
                        radius="none"
                        removeWrapper
                        className="object-cover h-full cursor-zoom-in"
                        onClick={() => setModalContent(galery3)}
                    />
                </div>
                <div className="col-span-6 row-span-1">
                    <Image
                        src={galery5}
                        radius="none"
                        removeWrapper
                        className="object-cover max-h-44 w-full cursor-zoom-in"
                        onClick={() => setModalContent(galery5)}
                    />
                </div>
            </div>
        },
    ]


    return (
        <div className="flex max-lg:flex-col gap-4 lg:gap-8 lg:grid lg:grid-cols-12 ">

            <div className="flex items-center justify-center lg:col-span-4">
                <Image src={roma} shadow="md" className="max-w-[500px] w-full" />
                <span className="absolute text-white text-5xl uppercase z-10 border-y border-white p-4">roma</span>
            </div>


            <div className="text-center max-w-[900px] lg:col-span-8">
                <Tabs aria-label="Options" color="warning" variant="bordered" classNames={{ tabList: 'max-sm:flex-wrap' }} >
                    {tabs_list.map(e =>
                        <Tab
                            key={e.id}
                            className="h-full flex justify-center items-center"
                            title={
                                <div className="flex items-center space-x-2">
                                    {e.icon}
                                    <span>{e.label}</span>
                                </div>
                            }
                        >
                            {e.content}
                        </Tab>
                    )}
                </Tabs>
            </div>

            <Modal
                isOpen={modalContent ? true : false}
                onOpenChange={() => setModalContent(false)}
                size="5xl"
                placement="center"
            >
                <ModalContent>
                    <ModalBody className="p-0">
                        <Image
                            src={modalContent}
                            removeWrapper
                            className="w-full h-full"
                        />
                    </ModalBody>
                </ModalContent>
            </Modal>

        </div>
    );
}

export default CardPack;
