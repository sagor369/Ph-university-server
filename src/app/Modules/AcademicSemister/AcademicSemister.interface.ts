import { Types } from "mongoose";

type months = 
    "January"| 
    "February"| 
    "March"| 
    "April"| 
    "May"| 
    "June"| 
    "July"| 
    "August"| 
    "September"| 
    "October"| 
    "November"| 
    "December"

export type TAcademic = {
    AcademicName: "autumn"| "summar" |"fatl",
    AcademicCode: "01"| "02"| "03"
    year: string
    startMonth: months
    endMonth: months

}

export type Tmapper = {
    [key: string]: string
}