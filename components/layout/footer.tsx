import NavLinkFooter from "./navlinkfooter";
import LogOutFooter from "./logoutfooter";

export default function LayoutFooter() {
    return (
        <div className="px-4 pb-8 flex flex-col gap-6">
            <NavLinkFooter />
            <LogOutFooter />
        </div>
    )
}