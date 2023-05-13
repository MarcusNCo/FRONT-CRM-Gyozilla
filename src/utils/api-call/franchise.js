import instance from "../interceptor";

export const getAllFranchises = () => {
    return instance.get("franchises");
}