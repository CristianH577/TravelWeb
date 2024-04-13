import { Card, CardBody, Image, Button, Divider } from "@nextui-org/react";

import { LoremIpsum } from 'react-lorem-ipsum';

import { FaArrowCircleRight } from "react-icons/fa";

import CardPack from "./components/CardPack";
import NavbarCustom from "./components/NavbarCustom";
import HeaderCustom from "./components/HeaderCustom";


import destinos from './assets/imgs/destinos.jpeg'
import peru from './assets/imgs/peru.jpeg'
import argentina from './assets/imgs/argentina.jpg'
import mexico from './assets/imgs/mexico.webp'
import conciertos from './assets/imgs/concierto.png'
import museos from './assets/imgs/museo.jpg'
import restaurantes from './assets/imgs/restaurante.jpg'



function App() {

  const dest_list = [
    { name: "Peru", img: peru },
    { name: "Argentina", img: argentina },
    { name: "Mexico", img: mexico }
  ]
  const exp_list = [
    { name: "conciertos", img: conciertos },
    { name: "museos", img: museos },
    { name: "restaurantes", img: restaurantes }
  ]


  return (
    <main className="pb-16" >

      <NavbarCustom />
      
      <HeaderCustom />

      <section className="flex flex-col items-center mt-16 gap-16 py-4 sm:px-4">

        <div className="flex gap-2 w-full h-[500px]">
          {dest_list.map(e =>
            <div key={e.name} className="relative flex justify-center items-center w-1/3 ] hover:w-2/3 transition-all " >
              <Image
                src={e.img}
                radius='none'
                removeWrapper
                className="object-cover h-full w-full"
              />

              <Button variant="ghost" radius="none" size="lg" color="" className="absolute z-20 text-white hover:bg-warning  w-[60%]">
                {e.name}
              </Button>
            </div>
          )}
        </div>


        <Divider className="w-[70vw]" />

        <Card className="bg-white max-w-[900px] shadow-none"  >
          <CardBody>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
              <div className="col-span-6 ">
                <Image src={destinos} shadow="sm" />
              </div>

              <div className="flex flex-col col-span-6 gap-4 ps-8">
                <h2 className="font-semibold text-3xl">Los mejores destinos</h2>

                <div className="ps-4 ">
                  <LoremIpsum random={false} p={1} />
                </div>

                <div className="pe-4 text-end">
                  <Button variant="ghost" color="secondary">
                    Conoce mas
                    <FaArrowCircleRight />
                  </Button>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>


        <Divider className="w-[70vw]" />

        <div className="flex flex-col justify-around items-center gap-8">

          <div className="flex sm:gap-4 items-center">
            <h2 className="font-semibold text-3xl pe-1">Nuevas experiencias</h2>

            <Button variant="ghost" color="success" className="hover:!text-white">
              Actividades
              <FaArrowCircleRight />
            </Button>
          </div>

          <div className="flex max-lg:flex-col gap-16 mt-8">
            {exp_list.map(e =>
              <div key={e.name} className=" flex flex-col justify-center items-center relative" >
                <Image
                  isZoomed
                  src={e.img}
                  width={300}
                  radius='full'
                  className="object-cover rounded-full h-[290px]"
                />

                <div className="capitalize text-4xl mt-4 absolute text-white z-20">{e.name}</div>

              </div>
            )}
          </div>
        </div>


        <Divider className="w-[70vw]" />

        <div className="flex flex-col items-center gap-8">

          <div className="flex gap-4 items-center">
            <h2 className="font-semibold text-3xl">Promociones</h2>

            <Button variant="ghost" className='border-orange-400 text-orange-400 hover:text-white hover:!bg-orange-400'>
              Mas
              <FaArrowCircleRight />
            </Button>
          </div>

          <CardPack />
        </div>

      </section>

    </main>
  );
}

export default App;
