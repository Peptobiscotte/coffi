import HeaderLayout from "@/components/venue-components/header-layout";

const description = 'Set your business up for success with a new workspace in the beating heart of Catania, just a stone’s throw from the sea. An exciting, multi-use development, surrounded by a lively mix of bars, restaurants and cafés, Viscoffice makes the ideal spot to work hard and play hard. Whether you’re getting your head down in flexible workspace, entertaining clients on the roof terrace, or training new recruits in the meeting rooms, you’ll find everything you need – all in one place.'

export default function VenuePage() {
    return (
        <div className="flex flex-col gap-8">
            <HeaderLayout />
            <div className="flex flex-col md:flex-row px-8 gap-8">
                <div className="font-geo text-slate-400 basis-1/4">
                    <h1 className="text-black">Main informations</h1>
                    <h2>Update name, description and tags</h2>
                </div>
                <div className="basis-3/4">
                    <form spellCheck="false" className="flex flex-col gap-6 font-geo text-sm border bg-white rounded-xl p-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor='cowork'>Cowork name</label>
                            <input type='text' defaultValue='Viscoffice' required id='cowork'  className="border rounded-xl px-3.5 py-2.5 text-slate-500"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="description">Description</label>
                            <textarea defaultValue={description} required id="description" className="border rounded-xl px-3.5 py-2.5 text-slate-500 resize-none h-40"></textarea>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="tags">Tags</label>
                            <input type="text" defaultValue='Coffee, Chill space, Free wifi, Printer' required id="tags" className="border rounded-xl px-3.5 py-2.5 text-slate-500"></input>
                        </div>
                        <div className="flex justify-end border-t pt-4">
                            <button className="bg-indigo-500 rounded-xl text-white text-sm p-2">Save changes</button>
                        </div>
                    </form>                    
                </div>
            </div>
        </div>
    )
}