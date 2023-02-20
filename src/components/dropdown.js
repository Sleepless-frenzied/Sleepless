import React from "react";
import { Menu } from '@headlessui/react'

import {Link} from "react-router-dom";

function Dropdown({name,links}) {
    return (

        <Menu as="div" className="relative ">
            <Menu.Button className=" hover:bg-gray-700 text-white px-3 py-2 text-sm font-medium rounded-md ">{name}</Menu.Button>

            <Menu.Items className="relative md:absolute bg-gray-800 z-1 rounded-md ">
                {links.map((link) => (
                    <Link to={link.to} key={link.href}>
                        <Menu.Item
                            as="a"
                            href={link.href}
                            className=" flex flex-col text-gray-300 hover:bg-gray-700 hover:rounded-md hover:text-white px-7 py-2 text-sm font-medium "

                        >
                            {link.label}
                        </Menu.Item>

                    </Link>
                ))}
            </Menu.Items>

        </Menu>


    );
}

export default Dropdown;