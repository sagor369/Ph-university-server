import { model, Schema } from "mongoose";
import { TStudent } from "./Student.interface";

const StudentSchema = new Schema<TStudent>({
  name: {
    firstName: { type: String },
    lastName: { type: String},
    middelName: { type: String }, 
  },
  email: { 
    type: String, 
    required:true
  },
  id: {
     type: String,
     unique:true ,
     required:true
    },
  user: {
     type: Schema.Types.ObjectId, 
     required: true
    
    },
  emergencyContactNo: {
     type: String,
     required:true
    },
  permanentAddress: {
     type: String, 
     required:true
    },
  profileImage: {
     type: String, 
    },
  gender: {
     enum: ["male", "female", "other"]
     
    },
  guardian: {
     type: String, 
     required:true
    },
  admissionSemester: {
     type: Schema.Types.ObjectId, 
     ref: "academicSemister"  
    },
  academicDepartment:{
    type: Schema.Types.ObjectId, 
    ref: "academicDepertment"
  },
  age: { 
    type: Number,
    required:true 
  },
  isDelete:{
    type: Boolean,
    default:false

  },
  contactNo: {
     type: String,
     required: true 
    },
  dateOfBirth: { type: String },
  localGuardian: { type: String },
  presentAddress: { type: String },
});


// StudentSchema.pre("save", async function (doc, next) {
//  console.log(doc)

  
  
// })

export const Students = model("student", StudentSchema);
