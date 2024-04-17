
import HomeHeader from "@/components/home-components/home-header/home-header"
import HomeSection from "@/components/home-components/home-section/home-section"


async function getData() {
  const res = await fetch(`${process.env.URL}/api/getData`)
  
  return res.json()
}

export default async function HomePage() {
  const { members, events } = await getData()
  
  return (
    <div className="flex flex-col gap-8">
      <HomeHeader />
      <HomeSection allMembers={members} events={events}/>
    </div>
  )
}

