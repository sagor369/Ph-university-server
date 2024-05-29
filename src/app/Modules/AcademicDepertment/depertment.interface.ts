import { Types } from "mongoose"

export type TDepertment = {
    name: string,
    academinFaculty: Types.ObjectId,
    isDelete: boolean
}