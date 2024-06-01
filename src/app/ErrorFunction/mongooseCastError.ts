import mongoose from "mongoose";
import { TerrorSources } from "../ErrorInterface/errorSources.type";


const CastErrorhandler = (err:mongoose.Error.CastError) =>{
    const errorSources:TerrorSources = [{
        path: err.path,
        message: err.message
    }]
    return {
        statusCode: 400,
        message: "Validation error",
        errorSources,
      };
}
export default CastErrorhandler