import MemberDetailHeader from "@/components/members-components/members-details/member-header";
import MemberDetailSection from "@/components/members-components/members-details/member-section";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from 'mongodb';

export default async function memberDetail({params}:any) {
    const slug = params.slug
    const member = await getMemberDetail(slug)

    return(
        <div>
            <MemberDetailHeader member={member}/>
            <MemberDetailSection member={member}/>
        </div>
    )
}

async function getMemberDetail(slug:any) {
    const memberId = slug
    try {
        const client = await clientPromise;
        const db = client.db()
        const member = await db.collection("members").findOne({ _id: new ObjectId(memberId)});
  
        const memberData = JSON.parse(JSON.stringify(member))
        
        return memberData 
    } catch (e) {
        console.error(e)
        return  { member : {} } 
      }
}