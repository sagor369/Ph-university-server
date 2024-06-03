import BuildsQuery from "../../Builds/QueryBuilds"
import { FacultyModel } from "../AcademicFaculty/AcademinFaculty.model"

const getFacultyInToDb = async(query: Record<string, unknown>) =>{

    const searchField = ["name.firstName", "name.lastName", "email", "id", "contactNo", "permanentAddress"]
    const excludeFields = ["searchTerm", "sort", "page", "limit", "field"]
    
    const GetFaculty = new BuildsQuery(FacultyModel.find(), query).search(searchField).filter(excludeFields).limit().paginat().sort().fields()
    const result =await GetFaculty.modelQuery
    return result

}
const getSingleFacultyInToDb = async() =>{

}
const updateFacultyInToDb = async() =>{

}
const deleteFacultyInToDb = async() =>{

}

export const FacultyServices = {
    getFacultyInToDb,
    getSingleFacultyInToDb,
    updateFacultyInToDb,
    deleteFacultyInToDb
}