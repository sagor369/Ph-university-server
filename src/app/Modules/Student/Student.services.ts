import { TStudent } from "./Student.interface";
import { Students } from "./Student.model";

const studentgtInToDB = async() =>{
    const result = await Students.find().populate("admissionSemester")
    return result
}

export const  StudentServices = {
    studentgtInToDB
}
