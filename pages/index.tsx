import HomeHeader from "@/components/home-components/home-header/home-header"
import HomeSection from "@/components/home-components/home-section/home-section"

export default function HomePage() {

  return (
    <div className="flex flex-col gap-8">
      <HomeHeader />
      <HomeSection />
    </div>
  )
}

