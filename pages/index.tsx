import HomeHeader from "@/components/home-components/home-header/home-header"
import UploadForm from "@/components/home-components/home-header/s3upload";
import HomeSection from "@/components/home-components/home-section/home-section"
import clientPromise from "@/lib/mongodb";

export default function HomePage(props: any) {
  const { members, events, creds } = props

  return (
    <div className="flex flex-col gap-8">
      <HomeHeader />
      <HomeSection allMembers={members} events={events}/>
      <UploadForm creds={creds}/>
    </div>
  )
}

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db1 = client.db('members')
    const db2 = client.db('events')
    const allMembers = await db1.collection("members").find({}).toArray();
    const allEvents = await db2.collection("events").find({}).toArray();
    const s3Client = {
      region : process.env.NEXT_AWS_S3_REGION,
      bucket : process.env.NEXT_AWS_S3_BUCKET_NAME,
      accessKey : process.env.NEXT_AWS_S3_ACCESS_KEY_ID,
      secretAccessKey : process.env.NEXT_AWS_S3_SECRET_ACCESS_KEY
    }

    return {
        props: { members : JSON.parse(JSON.stringify(allMembers)),
        events : JSON.parse(JSON.stringify(allEvents)),
        creds : s3Client
      }
    }
} catch (e) {
    console.error(e)
    return { props : { members : [] } }
  }
}
