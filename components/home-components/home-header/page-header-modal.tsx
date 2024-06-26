'use client'

import {Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure} from "@nextui-org/react";
import Image from "next/image";
import plusSvg from '../../../public/plus.svg'
import {Select, SelectSection, SelectItem} from "@nextui-org/react";
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation'
import { toast } from "sonner";
import check from '@/public/check-circle.svg'
import { uid } from "uid";
import {DateInput} from "@nextui-org/react";
import {parseDate, getLocalTimeZone} from "@internationalized/date";


export default function PageHeaderModal() {
  const newFileName = uid();

  const [dateValue, setDateValue] = useState(parseDate("2024-06-30"))
  const [file, setFile] = useState<File | undefined>();
  const [fileNameModified, setFileNameModified] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files[0]) {
          const selectedFile = event.target.files[0] as File; 
          setFile(selectedFile);
          setFileNameModified(false); 
      }
  };

  if (file && !fileNameModified) {
      const modifiedFile = new File([file], newFileName, { type: file.type });
      setFile(modifiedFile);
      setFileNameModified(true); 
  }

      

  const router = useRouter()
  
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const firstNameInputRef = useRef<HTMLInputElement>(null)
  const lastNameInputRef = useRef<HTMLInputElement>(null)
  const birthInputRef = useRef<HTMLInputElement>(null)
  const emailInputRef = useRef<HTMLInputElement>(null)
  const phoneInputRef = useRef<HTMLInputElement>(null)
  const planInputRef = useRef<HTMLSelectElement>(null)
  
  

 async function submitHandler(e:any) {
    e.preventDefault()

    const formData  = new FormData()
    if(file) {
      formData.append('file', file)
    }

    
    const memberData = {
      firstName: firstNameInputRef.current?.value,
      lastName: lastNameInputRef.current?.value,
      birthdate: dateValue.toString(),
      email: emailInputRef.current?.value,
      phone: phoneInputRef.current?.value,
      plan: planInputRef.current?.value,
      imageKey: file?.name
    }

    console.log(memberData)
    console.log(formData)

    await fetch('/api/s3-upload', {
      method: 'POST',
      body: formData,
    })

    // "http://localhost:3000/api/newMember"
    await fetch("/api/newMember", {
      method: 'POST',
      body: JSON.stringify(memberData),
      headers: {
          'Content-Type': 'application/json'
      }
  })


  router.push('')
  toast(<div className="flex gap-1 justify-start">
            <Image src={check} alt="check"/>
            <p>New member added!</p>
        </div>, {
            duration: 3000,
            unstyled: true,
            classNames: {
                toast: 'bg-emerald-500 text-white rounded-3xl px-4 py-2 font-geo'
            }
        })
  }


  return (
    <>
      <Button onPress={onOpen} className="max-sm:hidden bg-indigo-500 py-6 px-4 rounded-2xl">
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
                    <label htmlFor='birthdate'>Birthdate</label>
                    <DateInput variant="bordered" className="max-w-sm" size='lg' value={dateValue} onChange={setDateValue}/>
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
                    <Select variant="bordered" ref={planInputRef} size='lg' className="font-geo">
                      <SelectItem key='free' className="font-geo">Free</SelectItem>
                      <SelectItem key='premium' className="font-geo">Premium</SelectItem>
                      <SelectItem key='desk' className="font-geo">Desk</SelectItem>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor='file'>Profile picture</label>
                    <input type="file" id="file" name="file" accept="images/*" onChange={handleFileChange} className="file:border file:border-solid file:rounded-lg file:px-3.5 file:py-2.5"/>
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

