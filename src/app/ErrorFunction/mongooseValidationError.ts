import mongoose from "mongoose";
import { TerrorSources } from "../ErrorInterface/errorSources.type";
import { Tgeneric } from "../ErrorInterface/ErrorRespons";


const ValidationError = (err: mongoose.Error.ValidationError):Tgeneric =>{
    const errorSources:TerrorSources = Object.values(err.errors).map((value: mongoose.Error.ValidatorError | mongoose.Error.CastError )=>{
        return {
            path: value?.path,
            message: value?.message
        }
    })
    return {
        statusCode: 400,
        message: "Validation error",
        errorSources,
      };

}

export default ValidationError