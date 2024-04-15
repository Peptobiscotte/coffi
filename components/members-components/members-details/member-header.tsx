'use client'

import {Avatar} from "@nextui-org/react";
import bubbleSvg from '@/public/message-circle-02.svg'
import Image from "next/image";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function MemberDetailHeader({member}: any) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const router = useRouter()
    const id = member._id
    const imageURL = `https://mycoffibucket.s3.eu-west-3.amazonaws.com/userImg/${member.imageKey}`

    async function buttonHandler() {

        await fetch(`/api/deleteMember?id=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        router.push('/members')
        router.refresh()
    }

    return (
        <div>
            <div className="h-40 bg-gradient-to-r from-amber-500/20 to-indigo-500/20"></div>
            <div className="flex justify-between p-8 -mt-16">
                <div className="flex gap-6">
                    <Avatar showFallback className="w-40 h-40" src={imageURL}/>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-3xl font-brico">{member.firstName} {member.lastName}</h1>
                        <h2 className="text-base font-geo text-slate-400">{member.email}</h2>
                    </div>
                </div>
                <div className="flex gap-3 font-geo items-center">
                    <Button onPress={onOpen} variant="bordered" className="border-1 rounded-2xl">Delete</Button>
                    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                                    <ModalBody>
                                        <p className="font-geo"> 
                                            Delete user ?
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
                    <Button className="bg-indigo-500 text-white rounded-2xl flex">
                        <Image src={bubbleSvg} alt="text bubble"/>
                        Send Message
                        </Button>
                </div>
            </div>
        </div>
        
    )
}