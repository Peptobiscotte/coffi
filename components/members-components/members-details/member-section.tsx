import {Select, SelectSection, SelectItem} from "@nextui-org/react";
import {Avatar} from "@nextui-org/react";
import { useRef } from 'react';
import cloudSvg from '@/public/upload-cloud-02.svg'
import Image from "next/image";
import memberDetail from "@/pages/members/[memberId]";

export default function MemberDetailSection({member}: any) {
const firstNameInputRef = useRef<HTMLInputElement>(null)
  const lastNameInputRef = useRef<HTMLInputElement>(null)
  const birthInputRef = useRef<HTMLInputElement>(null)
  const emailInputRef = useRef<HTMLInputElement>(null)
  const phoneInputRef = useRef<HTMLInputElement>(null)
  const planInputRef = useRef<HTMLSelectElement>(null)

    return (
        <div className="flex p-8 gap-8">
            <div className="font-geo text-sm">
                <h1>Personal info</h1>
                <h2 className="text-slate-400">Update member photo and personal details.</h2>
            </div>
            <div className="flex-1">
            <form className="flex flex-col gap-6 font-geo p-6 rounded-2xl bg-white border">
                  <div className="flex gap-6">
                    <div className="flex flex-col gap-1.5 flex-1">
                      <label htmlFor='fname'>First name</label>
                      <input type='text' defaultValue={member.firstName} required id='fname' ref={firstNameInputRef} className="border rounded-lg px-3.5 py-2.5 font-light"/>
                    </div>
                    <div className="flex flex-col gap-1.5 flex-1">
                      <label htmlFor='lname'>Last name</label>
                      <input type='text' defaultValue={member.lastName} required id='lname' ref={lastNameInputRef} className="border rounded-lg px-3.5 py-2.5 font-light"/>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor='birth'>Birthdate</label>
                    <input type='text' defaultValue={member.birthdate} required id='birth'  ref={birthInputRef} className="border rounded-lg px-3.5 py-2.5"/>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex flex-col gap-1.5 flex-1">
                      <label htmlFor='email'>Email address</label>
                      <input type='email' defaultValue={member.email} required id='email' ref={emailInputRef} className="border rounded-lg px-3.5 py-2.5 font-light"/>
                    </div>
                    <div className="flex flex-col gap-1.5 flex-1">
                      <label htmlFor='phone'>Phone number</label>
                      <input type='tel' defaultValue={member.phone} required id='phone' ref={phoneInputRef} className="border rounded-lg px-3.5 py-2.5 font-light"/>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h1>Plan</h1>
                    <Select label={`Current plan : ${member.plan}`} variant="bordered" ref={planInputRef} className="font-geo">
                      <SelectItem key='free' className="font-geo text-black">Free</SelectItem>
                      <SelectItem key='premium' className="font-geo text-black">Premium</SelectItem>
                      <SelectItem key='desk' className="font-geo text-black">Desk</SelectItem>
                    </Select>
                  </div>
                  <div className="flex gap-5">
                    <Avatar showFallback className="h-16 w-16"/>
                    <div className="border rounded-2xl flex-1  py-6 px-8 text-sm text-slate-400 flex flex-col items-center">
                        <div>
                            <Image src={cloudSvg} alt="cloud svg" className="mb-3"/>
                        </div>
                        <div className="flex gap-1">
                            <button type='button' className="text-indigo-500">Click to upload</button>
                            <p>or drag & drop</p>
                        </div>
                        <p>SVG, PNG, JPG or GIF (max. 800x40px)</p>
                    </div>
                  </div>
                  <div className="flex justify-end border-t pt-4">
                    <button className="bg-indigo-500 rounded-xl text-white text-sm p-2">Save changes</button>
                  </div>
                </form>
            </div>
        </div>
    )
}