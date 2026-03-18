const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const registerUser = async (data: {
  email: string;
  password: string;
  phoneNumber: string;
}) => {
  try {
    const res = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.message || "Registration failed");
    }

    return result;
  } catch (error: any) {
    throw new Error(error.message || "Something went wrong");
  }
};

export const loginUser = async (data: {
  email: string;
  password: string;
}) => {
  try {
    const res = await fetch(`${BASE_URL}/auth/log-in/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.message || "Login failed");
    }

    return result;
  } catch (error: any) {
    throw new Error(error.message || "Something went wrong");
  }
};