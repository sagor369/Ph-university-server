import { model, Schema } from "mongoose";
import { TAcademicFaculty } from "./AcademicFaculty.interface";


const FacultySchame = new Schema<TAcademicFaculty>({
    name:{type: String, unique: true, required:true},
    isDelete:{type: Boolean, default:false}
},{
    timestamps:true
})

export const FacultyModel = model("academicFaculty", FacultySchame)