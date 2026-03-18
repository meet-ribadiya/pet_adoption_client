import { api } from "./api";
import { PetResponse } from "@/types/pet.types";

interface GetPetsParams {
  search?: string;
  species?: string;
  breed?: string;
  minAge?: number;
  maxAge?: number;
  pageNumber?: number;
  pageLimit?: number;
}

export const getPets = async (params: GetPetsParams): Promise<PetResponse> => {
  const response = await api.get("/pets/find-all", {
    params,
  });

  return response.data;
};

export const getFilterValues = async () => {
  const response = await api.get("/pets/filter-values");
  return response.data;
};