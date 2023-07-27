'use client'

import { EntryFrame } from "./entryFrame";
import Image from "next/image";
import { useState } from "react";

export function Tool({title, description, date}) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleOpen() {
        setIsOpen(!isOpen);
    }

    return(
        <EntryFrame date={date}>
            <h1 className="text-2xl text-center text-lm-dark p-2">{title}</h1>
            <p className={"text-sm text-center text-lm-dark p-2" + (isOpen ? " visible" : " hidden")}>{description}</p>
            <div className={"p-8 cursor-pointer" + (isOpen ? " rotate-180" : "")} onClick={toggleOpen}>
                <Image src={"/images/expand-down.svg"} alt="" width={30} height={30} />
            </div>
        </EntryFrame>
    )
}