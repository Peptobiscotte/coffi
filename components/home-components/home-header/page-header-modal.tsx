import {Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure} from "@nextui-org/react";
import Image from "next/image";
import plusSvg from '../../../public/plus.svg'
import {Select, SelectSection, SelectItem} from "@nextui-org/react";
import { useRef } from 'react';


export default function PageHeaderModal() {
  
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const firstNameInputRef = useRef<HTMLInputElement>(null)
  const lastNameInputRef = useRef<HTMLInputElement>(null)
  const birthInputRef = useRef<HTMLInputElement>(null)
  const emailInputRef = useRef<HTMLInputElement>(null)
  const phoneInputRef = useRef<HTMLInputElement>(null)
  const planInputRef = useRef<HTMLSelectElement>(null)

 async function submitHandler(e:any) {
    e.preventDefault()

    const memberData = {
      firstName: firstNameInputRef.current?.value,
      lastName: lastNameInputRef.current?.value,
      birthdate: birthInputRef.current?.value,
      email: emailInputRef.current?.value,
      phone: phoneInputRef.current?.value,
      plan: planInputRef.current?.value
    }

    await fetch('/api/new-member', {
      method: 'POST',
      body: JSON.stringify(memberData),
      headers: {
          'Content-Type': 'application/json'
      }
  })
 
  }


  return (
    <>
      <Button onPress={onOpen} className="bg-indigo-500 py-6 px-4 rounded-2xl">
        <Image src={plusSvg} alt="plus svg"/>
        <p className="font-geo text-white">New Member</p>
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xl">
        <ModalContent>
        {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-geo">New Member</ModalHeader>
              <ModalBody className="font-geo">
                <form onSubmit={submitHandler} className="flex flex-col gap-6">
                  <div className="flex gap-6">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor='fname'>First name</label>
                      <input type='text' required id='fname' ref={firstNameInputRef} className="border rounded-lg px-3.5 py-2.5 font-light"/>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor='lname'>Last name</label>
                      <input type='text' required id='lname' ref={lastNameInputRef} className="border rounded-lg px-3.5 py-2.5 font-light"/>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor='birth'>Birthdate</label>
                    <input type='text' required id='birth' placeholder='DD/MM/YYYY' ref={birthInputRef} className="border rounded-lg px-3.5 py-2.5"/>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor='email'>Email address</label>
                      <input type='email' required id='email' ref={emailInputRef} className="border rounded-lg px-3.5 py-2.5 font-light"/>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor='phone'>Phone number</label>
                      <input type='tel' required id='phone' ref={phoneInputRef} className="border rounded-lg px-3.5 py-2.5 font-light"/>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h1>Plan</h1>
                    <Select variant="bordered" ref={planInputRef} className="font-geo">
                      <SelectItem key='free' className="font-geo">Free</SelectItem>
                      <SelectItem key='premium' className="font-geo">Premium</SelectItem>
                      <SelectItem key='desk' className="font-geo">Desk</SelectItem>
                    </Select>
                  </div>
                  <div className="flex justify-end">
                    <button className="bg-indigo-500 rounded-xl text-white text-sm p-2" onClick={onClose}>Add Member</button>
                  </div>
                </form>
              </ModalBody>
            </>
            )}
        </ModalContent>
      </Modal>
    </>
  );
}

