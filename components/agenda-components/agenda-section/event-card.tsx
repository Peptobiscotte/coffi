'use client'

import Image from "next/image"
import clockSvg from '@/public/clock.svg'
import {Avatar, AvatarGroup} from "@nextui-org/react";
import editSvg from '@/public/edit-01.svg'
import pinSvg from "@/public/marker-pin-01.svg"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import trashSvg from '@/public/trash-01.svg'

export default function EventCard(props:any) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const { data, members } = props
    const router = useRouter()

    const id = data._id

    const participatingMembers = data.members
    
    const membresComplets = participatingMembers.map((memberName:any) => {
        const membreCorrespondant = members.find((member:any) => member.firstName === memberName);
       
        return membreCorrespondant || null;
    });
    
    const datePrim = data.date 
    const dateFull = new Date(datePrim)
    const dayWeekNumber = dateFull.getDate()
    const dayWeekString = dateFull.toDateString()
    const justDay = dayWeekString.slice(0, dayWeekString.indexOf(' ')).toUpperCase()

    async function buttonHandler() {

        await fetch(`/api/deleteEvent?id=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        router.push('/agenda')
        router.refresh()
    }
    

    return (
        <div className="flex justify-between border rounded-3xl bg-white font-geo pl-7 pr-5 py-4 items-center dark:bg-slate-900 dark:border-slate-900">
            <div className="flex gap-6">
                <div className="flex flex-col border-r justify-center dark:border-slate-800">
                    <p className="mr-6 dark:text-slate-200">{justDay}</p>
                    <p className="font-brico text-3xl dark:text-slate-200">{dayWeekNumber}</p>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-lg dark:text-slate-200">{data.title}</h1>
                    <p className="flex gap-1 text-slate-500">
                        <Image src={clockSvg} alt="clock"/>
                        {data.from} - {data.to}
                    </p>
                    <AvatarGroup isBordered max={3} size='sm'>
                   {membresComplets.map((member:any, i:any) => (
                        <Avatar key={member._id} src={`https://mycoffibucket.s3.eu-west-3.amazonaws.com/userImg/${member.imageKey}`}/>
                   ))}
                </AvatarGroup>
                </div>
                <div className="flex gap-1 items-center max-sm:hidden">
                    <Image src={pinSvg} alt="pin"/>
                    <p className="text-slate-500 ">{data.location}</p>
                </div>
            </div>
            <div className="flex">
            <Button onPress={onOpen} variant="bordered" className="border-none max-sm:hidden"><Image src={trashSvg} alt="trash"/></Button>
                    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                                    <ModalBody>
                                        <p className="font-geo"> 
                                            Delete event ?
                                        </p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                        Cancel
                                        </Button>
                                        <Button color="primary" onPress={buttonHandler}>                                                                       
                                        Delete
                                        </Button>
                                    </ModalFooter>
                                </>
                            )}
                            </ModalContent>
                        </Modal>
                <button className="flex gap-2 border rounded-3xl py-2 px-3.5 max-sm:hidden dark:border-slate-800">
                    <Image src={editSvg} alt="edit"/>
                    <p className="text-slate-500">Edit</p>
                </button>
            </div>
        </div>
    )
}