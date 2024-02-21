import SideLayout from "./sideLayout";

export default function Layout(props: any) {
    return (
        <div className="flex items-start">
            <SideLayout />
            <main className="basis-4/5 bg-stone-50 h-screen">{props.children}</main>
        </div>
    )
}