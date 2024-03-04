import PageHeaderModal from "@/components/home-components/home-header/page-header-modal"

export default function HeaderTitle() {
    return(
        <div className="flex justify-between px-8 pt-8">
            <h1 className="font-brico text-3xl">Members</h1>
            <PageHeaderModal />
        </div>
    )
}