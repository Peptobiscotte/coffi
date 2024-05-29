import HeaderLayout from "@/components/venue-components/header-layout";

export default function GeneralPage(props:any) {
    const { data } = props
    const name = data[0].name
    const desc = data[0].description
    const tags = data[0].tags

    return (
        <div className="flex flex-col gap-8">
            <HeaderLayout />
            <div className="flex flex-col md:flex-row px-8 gap-8">
                <div className="font-geo text-slate-400 basis-1/4">
                    <h1 className="text-black dark:text-slate-200">Main informations</h1>
                    <h2>Update name, description and tags</h2>
                </div>
                <div className="basis-3/4">
                    <form spellCheck="false" className="flex flex-col gap-6 font-geo text-sm border bg-white rounded-xl p-6 dark:bg-slate-900 dark:border-slate-900">
                        <div className="flex flex-col gap-2">
                            <label htmlFor='cowork' className="dark:text-slate-200">Cowork name</label>
                            <input type='text' defaultValue={name} required id='cowork'  className="border rounded-xl px-3.5 py-2.5 text-slate-500 dark:bg-slate-800 dark:border-slate-800"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="description" className="dark:text-slate-200">Description</label>
                            <textarea defaultValue={desc} required id="description" className="border rounded-xl px-3.5 py-2.5 text-slate-500 resize-none h-40 dark:bg-slate-800 dark:border-slate-800"></textarea>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="tags" className="dark:text-slate-200">Tags</label>
                            <input type="text" defaultValue={tags} required id="tags" className="border rounded-xl px-3.5 py-2.5 text-slate-500 dark:bg-slate-800 dark:border-slate-800"></input>
                        </div>
                        <div className="flex justify-end border-t pt-4 dark:border-slate-800">
                            <button className="bg-indigo-500 rounded-xl text-white text-sm p-2">Save changes</button>
                        </div>
                    </form>                    
                </div>
            </div>
        </div>
    )
}