import { model, Schema } from "mongoose";
import { TDepertment } from "./depertment.interface";
import { AppError } from "../../Middlewares/CustomError";
import httpStatus from "http-status";


const DepertmentSchema = new Schema<TDepertment>({
    name: {type: String, unique:true, required:true},
    academinFaculty:{type: Schema.Types.ObjectId, required:true, ref: "academicFaculty"},
    isDelete: {type: Boolean, default: false}
}, {timestamps:true})

DepertmentSchema.pre("save", async function(next){
    const existingDepartment = await DepertmentModel.findOne({name: this.name})
    if(existingDepartment){
        throw new AppError(httpStatus.NOT_FOUND, "This department is already exist!")
    }
    next()
})
DepertmentSchema.pre("findOneAndUpdate", async function(next){
    const query = this.getQuery()
    const existingDepartment = await DepertmentModel.findOne(
        {_id: query, isDelete: true}
    )
    if(existingDepartment){
        throw new AppError(httpStatus.NOT_FOUND, "This department dose not exist!")
    }
    next()
})

export const DepertmentModel = model("academicDepertment", DepertmentSchema)