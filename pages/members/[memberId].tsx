import MemberDetailHeader from "@/components/members-components/members-details/member-header";
import MemberDetailSection from "@/components/members-components/members-details/member-section";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from 'mongodb';

export default function memberDetail({ member }: any) {

    return(
        <div>
            <MemberDetailHeader member={member}/>
            <MemberDetailSection member={member}/>
        </div>
    )
}

export async function getStaticProps({params}: any) {
    const memberId = params.memberId

    try {
      const client = await clientPromise;
      const db = client.db()
      const member = await db.collection("members").findOne({ _id: new ObjectId(memberId)});
  
      return {
          props: { member : JSON.parse(JSON.stringify(member))}
      }
  } catch (e) {
      console.error(e)
      return { props : { members : [] } }
    }
  }
  
export async function getStaticPaths() {
    const client = await clientPromise;
    const db = client.db()
    const member = await db.collection("members").findOne({})
    const data = JSON.parse(JSON.stringify(member?._id))

    return {
        paths : [
            { params : { memberId : data }}
        ],
        fallback: 'blocking'
    }
}