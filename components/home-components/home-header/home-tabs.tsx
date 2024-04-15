'use client'

import {Button, ButtonGroup} from "@nextui-org/react";
import HomeTabCalendar from "./home-tabs-calendar";
import { useState } from "react";

export default function HomeTabs() {
    const [isPressed, setIsPressed] = useState(1)

    function pressHandler(id: any) {
        setIsPressed(id)
    }

    const inactive = 'text-slate-500 bg-white'
    const active = 'text-white bg-indigo-500'

    return (
        <div className="flex justify-between">
            <ButtonGroup className="font-geo">
                <Button className={isPressed === 1 ? active : inactive} onClick={()=>pressHandler(1)}>12 months</Button>
                <Button className={isPressed === 2 ? active : inactive} onClick={()=>pressHandler(2)}>30 days</Button>
                <Button className={isPressed === 3 ? active : inactive} onClick={()=>pressHandler(3)}>7 days</Button>
                <Button className={isPressed === 4 ? active : inactive} onClick={()=>pressHandler(4)}>24 hours</Button>
            </ButtonGroup>
            <HomeTabCalendar />
        </div>
    )
}