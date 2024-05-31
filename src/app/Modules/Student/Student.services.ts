import { TStudent } from "./Student.interface";
import { Students } from "./Student.model";

const studentgtInToDB = async() =>{
    const result = await Students.find().populate("admissionSemester")
    return result
}

const updateStudentInToDb = async ( studentId:string, payload: Partial<TStudent>) =>{

const result =await Students.findOneAndUpdate({id: studentId}, payload, {new:true})
return result
}

export const  StudentServices = {
    studentgtInToDB,
    updateStudentInToDb,

}
