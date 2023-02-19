import React from "react";
import { Menu } from '@headlessui/react'

import {Link} from "react-router-dom";

function Dropdown({name,links}) {
    return (
        <Menu>
            <Menu.Button className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
            >{name}</Menu.Button>
            <Menu.Items>
                {links.map((link) => (
                    <Link to={link.to}>
                        <Menu.Item
                            as="a"
                            key={link.href}
                            href={link.href}
                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            //className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black"
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