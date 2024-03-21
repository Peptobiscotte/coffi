import HomeHeader from "@/components/home-components/home-header/home-header"
import HomeSection from "@/components/home-components/home-section/home-section"
import clientPromise from "@/lib/mongodb";

export default function HomePage(props: any) {
  const { members } = props

  return (
    <div className="flex flex-col gap-8">
      <HomeHeader />
      <HomeSection allMembers={members}/>
    </div>
  )
}

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db('members')
    const allMembers = await db.collection("members").find({}).toArray();

    return {
        props: { members : JSON.parse(JSON.stringify(allMembers))}
    }
} catch (e) {
    console.error(e)
    return { props : { members : [] } }
  }
}
