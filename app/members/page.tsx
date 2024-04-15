import MembersHeader from "@/components/members-components/members-headers/headers";
import MembersMain from "@/components/members-components/members-section/MembersMain";
import clientPromise from "@/lib/mongodb";

async function getData() {
  const res = await fetch(process.env.URL + '/api/getData')
  return res.json()
}

export default async function MembersPage() {
  const { members } = await getData()

    return (
      <div>
        <MembersHeader allMembers={members}/>
        <MembersMain allMembers={members}/>
      </div>
    )
  }

  