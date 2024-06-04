import { FilterQuery, Query } from "mongoose";

class BuildsQuery {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    (this.modelQuery = modelQuery), (this.query = query);
  }
  search(searchField: string[]) {
    const searchTerm = this?.query?.searchTerm as string;
    if (searchTerm) {
      this.modelQuery.find({
        $or: searchField.map((field) => ({
          [field]: { $regex: searchTerm, $options: "i" },
        }) as FilterQuery<T>
    ),
      });
    }
    return this;
  }
  filter(excludeFields: string[]) {
    // if (this.query) {
      const queryObj = { ...this.query };
      excludeFields.forEach((el) => delete queryObj[el]);
      this.modelQuery.find(queryObj);
      return this;
    // }
  }
  sort() {
    const sort =
      (this?.query?.sort as string)?.split(",")?.join(" ") || "-createAt";
    this.modelQuery.sort(sort as string);
    return this;
  }
  limit() {
    const limit = Number(this.query?.limit) || 1;
    this.modelQuery.limit(limit);
    return this;
  }
  paginat() {
    const limit = Number(this.query?.limit) || 1;
    const page = Number(this.query?.page) || 1;
    const skip = (page - 1) * limit;
    this.modelQuery.skip(skip);
    return this;
  }
  fields() {
    const fields =
      (this.query?.fields as string)?.split(",")?.join(" ") || "-__v";
    this.modelQuery.select(fields);
    return this;
  }
}

export default BuildsQuery;
