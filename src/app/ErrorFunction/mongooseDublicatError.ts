import { Tgeneric } from "../ErrorInterface/ErrorRespons";
import { TerrorSources } from "../ErrorInterface/errorSources.type";


const DublicatErrorHandler = (err:any):Tgeneric =>{
    const match = err.message.match(/"([^"]*)"/)
    const extractedValue = match && match[1]
    const errorSources:TerrorSources = [{
        path: "",
        message: `${extractedValue} is already exists`
    }]

    return {
        statusCode: 400,
        message: "Validation error",
        errorSources,
      };
}
export default DublicatErrorHandler