import usersSvg from '../../../public/users-02.svg'
import Image from 'next/image'
import Link from 'next/link'
import MemberCard from './member-card'


export default function BestMembers(props: any) {   
    
    const membArr = props.allMembers
   

    return (
        <div className="flex flex-col gap-5 p-6 bg-white border rounded-3xl grow self-start dark:bg-slate-900 dark:border-slate-900">
            <div className='flex justify-between'>
                <div className='flex'>
                    <div className='flex justify-center p-2 mr-2 bg-stone-100 rounded-lg dark:bg-slate-800'>
                        <Image src={usersSvg} alt='user svg' className=''/>
                    </div>
                    <h1 className='font-geo text-lg dark:text-slate-200'>Best members</h1>
                </div>
                <div className='font-geo text-sm text-indigo-600'>
                    <Link href={'/members'}>See all</Link>
                </div>
            </div>
            <div>
                {membArr.map((member: any) => <MemberCard key={member._id} member={member}/>)}
            </div>
        </div>
    )
}

