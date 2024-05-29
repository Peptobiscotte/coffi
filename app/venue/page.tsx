import GeneralPage from "@/components/venue-components/general-page";
import HeaderLayout from "@/components/venue-components/header-layout";
import { MongoClient } from "mongodb"
import { revalidatePath } from 'next/cache'


const description = 'Set your business up for success with a new workspace in the beating heart of Catania, just a stone’s throw from the sea. An exciting, multi-use development, surrounded by a lively mix of bars, restaurants and cafés, Viscoffice makes the ideal spot to work hard and play hard. Whether you’re getting your head down in flexible workspace, entertaining clients on the roof terrace, or training new recruits in the meeting rooms, you’ll find everything you need – all in one place.'

export default async function VenuePage() {
    const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_HOST}:${process.env.DB_PASS}@cluster0.bqzxlqw.mongodb.net/?retryWrites=true&w=majority`)
    const db = client.db('venue')
    const general = await db.collection("general").find({}).toArray()
    const generalData = JSON.parse(JSON.stringify(general))

    revalidatePath('/venue')

    return (
        <GeneralPage data={generalData}/>
    )
}