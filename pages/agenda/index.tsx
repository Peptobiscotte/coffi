import Header from "@/components/agenda-components/agenda-header/header"
import Section from "@/components/agenda-components/agenda-section/section"

export default function AgendaPage() {
    return (
        <div className="flex flex-col pt-10 px-8 gap-8">
            <Header />
            <Section />
        </div>
    )
}