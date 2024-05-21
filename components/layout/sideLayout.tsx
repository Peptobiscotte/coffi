import LayoutHeader from "./header";
import LayoutFooter from "./footer";

export default function SideLayout(props:any) {
    const user = props

    return (
        <div className="basis-1/5 bg-white dark:bg-slate-900 dark:border-slate-950 border-r border-stone-200 flex flex-col justify-between h-screen md:sticky md:top-0 max-sm:mb-4">
            <LayoutHeader />
            <span className="max-sm:hidden">
                <LayoutFooter user={user}/>
            </span>
        </div>
    )
}