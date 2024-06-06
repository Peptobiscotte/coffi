import NavLinkFooter from "./navlinkfooter";
import LogOutFooter from "./logoutfooter";

export default function LayoutFooter(props:any) {
    const user = props

    return (
        <div className="px-4 pb-8 flex flex-col gap-6">
            <NavLinkFooter />
            <LogOutFooter user={user}/>
        </div>
    )
}