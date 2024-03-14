import SideLayout from "./sideLayout";

export default function Layout(props: any) {
    return (
        <div className="flex items-start relative">
            <SideLayout />
            <main className="basis-4/5 bg-zinc-50 min-h-screen">{props.children}</main>
        </div>
    )
}