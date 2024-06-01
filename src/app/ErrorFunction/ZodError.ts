import { ZodError, ZodIssue } from "zod";
import { TerrorSources } from "../ErrorInterface/errorSources.type";
import { Tgeneric } from "../ErrorInterface/ErrorRespons";

export const HandleZodError = (err: ZodError):Tgeneric => {
  const errorSources: TerrorSources = err.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue?.path.length - 1],
      message: issue.message,
    };
  });

  return {
    statusCode: 400,
    message: "Validation error",
    errorSources,
  };
};
