import { model, Schema } from "mongoose";
import { AcademicCode, AcademicName, month } from "./conastan";

const AcademincSchema = new Schema({
    AcademicName: {
        type: String,
        enum: [...AcademicName],
        
    },
    AcademicCode: {
        type: String,
        enum: [...AcademicCode],
        
    },
    year: {
        type: String,
       
    },
    startMonth: {
        type: String,
        enum: [...month ],
       
    },
    endMonth: {
        type: String,
        enum: [...month ],
        
    }
},{
    timestamps: true
});


AcademincSchema.pre("save", async function (next){
    const existingdata = await AcademicModel.findOne({
        AcademicName: this.AcademicName,
        year : this.year
    })
    if(existingdata){
        throw new Error("semester in alredy exist")
    }
    next()
})

export const AcademicModel = model("academicSemister", AcademincSchema)