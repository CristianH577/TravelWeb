import { useState } from "react";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";

import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiYourtraveldottv } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";


function NavbarCustom() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Inicio",
        "Servicios",
        "Contacto",
    ]


    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <SiYourtraveldottv className="text-orange-600" />
                    <p className="font-bold text-inherit">Empresa</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive>
                    <Link color="" href="#">
                        Inicio
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link color="foreground" href="#">
                        Servicios
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Contacto
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end" className="gap-1">
                <Button variant="light" isIconOnly>
                    <FaFacebook size={25} className="text-slate-600" />
                </Button>
                <Button variant="light" isIconOnly>
                    <FaInstagram size={25} className="text-slate-600" />
                </Button>
                <Button variant="light" isIconOnly>
                    <FaSquareXTwitter size={25} className="text-slate-600" />
                </Button>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}

export default NavbarCustom;
