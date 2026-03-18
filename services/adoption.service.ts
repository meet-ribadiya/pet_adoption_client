import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const getAuthHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});


export const getAdoptions = async (page = 1, limit = 50) => {
  try {
    const res = await axios.get(
      `${API_URL}/adoption/find-all/admin?pageNumber=${page}&pageLimit=${limit}`,
      getAuthHeader()
    );

    return res.data;
  } catch (error: any) {
    throw error?.response?.data || { message: "Failed to fetch adoptions" };
  }
};


export const updateAdoptionStatus = async (id: string, status: string) => {
  try {
    const res = await axios.patch(
      `${API_URL}/adoption/update-status/admin`,
      { id, status },
      getAuthHeader()
    );

    return res.data;
  } catch (error: any) {
    throw error?.response?.data || { message: "Failed to update status" };
  }
}

export const createAdoption = async (petId: string, message: string) => {
  try {
    const res = await axios.post(
      `${API_URL}/adoption/create`,
      { petId, message },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    return res.data;
  } catch (error: any) {
    throw error?.response?.data || { message: "Failed to create adoption" };
  }
}

export const getMyAdoptions = async () => {
  const res = await axios.get(
    `${API_URL}/adoption/my-adoptions?pageNumber=1&pageLimit=50`,
    getAuthHeader()
  );

  return res.data;
};

