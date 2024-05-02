

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {Select, SelectSection, SelectItem} from "@nextui-org/react";
import plusSvg from '@/public/plus.svg'
import Image from "next/image";
import {DateField, Label, DateInput, DateSegment} from 'react-aria-components';
import { useRef, useState } from 'react';
import { useRouter } from "next/navigation";
import {parseDate} from '@internationalized/date';
import {I18nProvider} from 'react-aria';
import { toast } from "sonner";
import check from '@/public/check-circle.svg'

export default function EventModal(props:any) {
  const router = useRouter()

  const { members } = props
  
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const titleInputRef = useRef<HTMLInputElement>(null)
  const fromInputRef = useRef<HTMLInputElement>(null)
  const toInputRef = useRef<HTMLInputElement>(null)
  const whereInputRef = useRef<HTMLSelectElement>(null)

  let [dateValue, setValue] = useState(parseDate('2024-04-28'));

  const [memberValues, setValues] = useState(new Array());

  const handleSelectionChange = (e:any) => {
    setValues(e.target.value.split(","));
  };


  async function submitHandler(e: React.FormEvent) {
    e.preventDefault()

    const eventData = {
      title: titleInputRef.current?.value,
      from: fromInputRef.current?.value,
      to: toInputRef.current?.value,
      location: whereInputRef.current?.value,
      members: memberValues,
      date: dateValue?.toString()
    }

    await fetch('/api/newEvent', {
      method: 'POST',
      body: JSON.stringify(eventData),
      headers: {
          'Content-Type': 'application/json'
      }
  })
  router.push('/agenda')
  toast(<div className="flex gap-1 justify-start">
            <Image src={check} alt="check"/>
            <p>New event created!</p>
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
      <Button onPress={onOpen} className="flex bg-indigo-500 py-6 px-4 rounded-2xl max-sm:hidden">
        <Image src={plusSvg} alt="plus"/>
        <p className="font-geo text-white">New event</p>
      </Button>
      <Modal placement="center" isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">New Event</ModalHeader>
              <ModalBody>
                <form onSubmit={submitHandler} className="font-geo flex flex-col gap-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor='title'>Title</label>
                    <input ref={titleInputRef} type='text' required id='title' className="border-2 rounded-lg px-3.5 py-2.5 font-light"/>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex flex-col gap-1.5 grow">
                      <label htmlFor='title'>From :</label>
                      <input ref={fromInputRef} type='text' required id='title' className="border-2 rounded-lg px-3.5 py-2.5 font-light" placeholder="09:00"/>
                    </div>
                    <div className="flex flex-col gap-1.5 grow">
                      <label htmlFor='title'>To :</label>
                      <input ref={toInputRef} type='text' required id='title' className="border-2 rounded-lg px-3.5 py-2.5 font-light" placeholder="09:00"/>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h1>Where</h1>
                    <Select ref={whereInputRef} variant="bordered" className="font-geo">
                      <SelectItem key='Conference Hall' className="font-geo">Conference Hall</SelectItem>
                      <SelectItem key='Conference/Presentation Room' className="font-geo">Conference/Presentation Room</SelectItem>
                      <SelectItem key='Meeting Room' className="font-geo">Meeting Room</SelectItem>
                      <SelectItem key='Small Meeting Room' className="font-geo">Small Meeting Room</SelectItem>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h1>Members</h1>
                    <Select variant="bordered" className="font-geo" selectionMode="multiple" onChange={handleSelectionChange}>
                      {members.map((member: any) =>
                      <SelectItem key={member.firstName} className="font-geo">{member.firstName}</SelectItem>
                      )}
                    </Select>
                  </div>
                    <I18nProvider locale="fr-FR">
                  <DateField value={dateValue} onChange={setValue}>
                    <Label>Date</Label>
                    <DateInput className='flex border-2 rounded-lg px-3.5 py-2.5'>
                      {segment => <DateSegment segment={segment} />}
                    </DateInput>
                  </DateField>
                    </I18nProvider>
                  <div className="flex justify-end mt-10">
                    <button className="bg-indigo-500 rounded-xl text-white text-sm p-2" onClick={onClose}>Add Event</button>
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