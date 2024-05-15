import SideLayout from "./sideLayout";

export default function Layout(props: any) {
    return (
        <div className="flex flex-col md:flex-row md:items-start">
            <SideLayout />
            <main className="md:basis-4/5 dark:bg-slate-800 bg-zinc-50 md:min-h-screen">{props.children}</main>
        </div>
    )
}