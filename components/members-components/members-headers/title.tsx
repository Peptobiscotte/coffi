import PageHeaderModal from "@/components/home-components/home-header/page-header-modal"

export default function HeaderTitle(props:any) {
    const { user } = props
    return(
        <div className="flex justify-between px-8 pt-10">
            <h1 className="font-brico text-3xl dark:text-slate-200">Members</h1>
            {user.role === "admin" ? 
                <PageHeaderModal />
                : ''
            }
        </div>
    )
}