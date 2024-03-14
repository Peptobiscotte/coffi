import EventModal from "./event-form";
import {Button, ButtonGroup} from "@nextui-org/react";
import { useState } from "react";
import rowSvg from '@/public/rows-01.svg'
import columnSvg from '@/public/columns-03.svg'
import Image from "next/image";

export default function Header() {
    const [isPressed, setIsPressed] = useState(1)
    const [isPressed1, setIsPressed1] = useState(4)

    function pressHandler(id: any) {
        setIsPressed(id)
    }
    function pressHandler1(id: any) {
        setIsPressed1(id)
    }

    const inactive = 'text-slate-500 bg-white border-1'
    const active = 'text-white bg-indigo-500 border-1'

    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between">
                <div className="flex flex-col gap-1">
                    <h1 className="font-brico text-3xl">Agenda</h1>
                    <h2 className="font-geo text-slate-400">Create & organize your cowork events</h2>
                </div>
                <div>
                    <EventModal />
                </div>
            </div>
            <div className="flex justify-between">
                <div>
                    <ButtonGroup className="font-geo">
                        <Button className={isPressed === 1 ? active : inactive} onClick={()=>pressHandler(1)}>12 months</Button>
                        <Button className={isPressed === 2 ? active : inactive} onClick={()=>pressHandler(2)}>30 days</Button>
                        <Button className={isPressed === 3 ? active : inactive} onClick={()=>pressHandler(3)}>7 days</Button>
                    </ButtonGroup>
                </div>
                <div>
                    <ButtonGroup>
                        <Button className={isPressed1 === 4 ? active : inactive} onClick={()=>pressHandler1(4)}><Image src={rowSvg} alt="row"/></Button>
                        <Button className={isPressed1 === 5 ? active : inactive} onClick={()=>pressHandler1(5)}><Image src={columnSvg} alt="column" /></Button>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    )
}