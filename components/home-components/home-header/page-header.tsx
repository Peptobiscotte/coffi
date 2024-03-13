import PageHeaderModal from "./page-header-modal"

export default function PageHeader() {

    return (
        <div className="flex justify-between">
            <div>
                <h1 className="font-brico text-3xl">Viscoffice Dashboard</h1>
                <h2 className="font-geo text-slate-400">Welcome back, Sienna!</h2>
            </div>
            <div>
                <PageHeaderModal />
            </div>
        </div>
    )
}