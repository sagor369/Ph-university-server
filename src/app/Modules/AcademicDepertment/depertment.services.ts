import { TDepertment } from "./depertment.interface";
import { DepertmentModel } from "./depertment.model";


const createDepertmentInToDb = async(payload:TDepertment) => {
    const result =await DepertmentModel.create(payload)
    return result
}

const getDepertmentInToDb = async() =>{
    const result = DepertmentModel.find({isDelete: false}).populate("academinFaculty")
    return result
}
const getSingleDepertmentInToDb = async(id:string) =>{
    const result = DepertmentModel.findOne({_id: id , isDelete: false})
    return result
}
const updateDepertmentInToDb = async(id:string, payload:TDepertment) =>{
    const result = DepertmentModel.findByIdAndUpdate(id, payload, {new: true})
    return result
}
const deleteDepertmentInToDb = async(id:string) =>{
    const deleteData = {$set:{
        isDelete: true
    }}
    const result = DepertmentModel.findByIdAndUpdate(id,deleteData, {new: true})
    return result
}

export const DepertmentServices = {
    createDepertmentInToDb,
    getDepertmentInToDb,
    getSingleDepertmentInToDb,
    updateDepertmentInToDb,
    deleteDepertmentInToDb
    
}