
import { Input, Button } from "@nextui-org/react";

import { SiYourtraveldottv } from "react-icons/si";

import home from '../assets/imgs/home.jpg'


function NavbarCustom() {

    return (
        <div
            className="bg-no-repeat bg-center bg-fixed max-h-[800px] grid grid-rows-6 "
            style={{ backgroundImage: `url(${home})` }}
        >
            <div className='text-6xl sm:text-8xl flex max-sm:flex-col gap-2 items-center sm:justify-center max-sm:pt-8 text-white row-span-3 sm:row-span-4 '>
                <SiYourtraveldottv size={150} className="text-orange-600" />
                <div>
                    <div className="font-semibold text-danger">Empresa</div>
                    <div className="italic">Viajes</div>
                </div>
            </div>

            <div className="row-span-3 sm:row-span-2 flex flex-col items-center justify-center relative mt-4">
                <span className="bg-white h-1/2 absolute bottom-0 w-full"></span>

                <div className="bg-gradient-to-br from-orange-400 to-warning p-4 sm:p-6 rounded-lg flex max-xl:flex-col items-center gap-4 shadow-md backdrop-blur-md sm:mx-4 max-sm:w-full">
                    <div className="flex max-lg:flex-col gap-4 max-sm:w-full">
                        <div className="flex max-sm:flex-col max-sm:gap-2">
                            <Input size="lg" label='Origen' classNames={{ inputWrapper: 'sm:rounded-e-none' }} />
                            <Input size="lg" label='Destino' classNames={{ inputWrapper: 'sm:rounded-s-none' }} />
                        </div>

                        <div className="flex max-sm:flex-col gap-2">
                            <Input size="lg" label='Ida' type="date" />
                            <Input size="lg" label='Vuelta' type="date" />
                        </div>

                        <div className="flex justify-center">
                            <Input size="lg" label='Adultos' type="number" className="sm:max-w-36" classNames={{ inputWrapper: 'rounded-e-none' }} />
                            <Input size="lg" label='Menores' type="number" className="sm:max-w-36" classNames={{ inputWrapper: 'rounded-s-none' }} />
                        </div>
                    </div>

                    <div className="text-center">
                        <Button color="primary" size="lg" variant="shadow" className="hover:!opacity-100 hover:scale-110">Buscar viajes</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavbarCustom;
