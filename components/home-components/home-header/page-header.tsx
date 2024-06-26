import PageHeaderModal from "./page-header-modal"

export default function PageHeader(props:any) {
    const { user } = props

    return (
        <div className="flex justify-between">
            <div>
                <h1 className="font-brico text-3xl dark:text-slate-200">Viscoffice Dashboard</h1>
                <h2 className="font-geo text-slate-400">Welcome back, {user.name} !</h2>
            </div>
            {user.role === "admin" ? 
                <div>
                    <PageHeaderModal />
                </div>
                :
                null
            }
            
        </div>
    )
}