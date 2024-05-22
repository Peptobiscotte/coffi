
import HomeTabs from "./home-tabs";
import PageHeader from "./page-header";

export default function HomeHeader(props:any) {
const { user } = props

    return (
        <div className="flex flex-col px-8 gap-8 pt-2">
            <PageHeader user={user}/>
            <HomeTabs />
        </div>
    )
}