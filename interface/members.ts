import { ObjectId } from "mongodb"

export default interface Member {
    _id: ObjectId,
    firstName: string
    lastName: string
    birthdate: string
    email: string
    phone: string
    plan: string
}