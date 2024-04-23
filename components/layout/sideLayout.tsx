import LayoutHeader from "./header";
import LayoutFooter from "./footer";

export default function SideLayout() {
    return (
        <div className="basis-1/5 bg-white border-r border-stone-200 flex flex-col justify-between h-screen md:sticky md:top-0">
            <LayoutHeader />
            <LayoutFooter />
        </div>
    )
}