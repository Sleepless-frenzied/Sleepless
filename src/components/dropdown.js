import React from "react";
import { Menu } from '@headlessui/react'

import {Link} from "react-router-dom";

function Dropdown({name,links}) {
    return (

        <Menu as="div" className="relative z-10 hover:bg-gray-700 hover:rounded-md ">
            <Menu.Button className="text-xl  w-auto hover:bg-gray-700 text-white px-3 py-2 text-sm font-medium rounded-md ">{name}</Menu.Button>

            <Menu.Items className="relative md:absolute  bg-gray-800 rounded-md ">
                {links.map((link) => (
                    <div className="hover:bg-gray-700 rounded-md hover:rounded-md">
                        <Link to={link.to} key={link.href} >
                            <Menu.Item
                                as="a"
                                href={link.href}
                                className=" flex flex-col hover:bg-gray-700 text-gray-300 hover:bg-gray-700 hover:rounded-md hover:text-white w-auto mx-9 py-2 text-lg font-medium "

                            >
                                {link.label}
                            </Menu.Item>

                        </Link>
                    </div>

                ))}
            </Menu.Items>

        </Menu>


    );
}

export default Dropdown;