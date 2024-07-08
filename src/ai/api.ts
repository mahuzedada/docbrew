import axios from "axios";

export const prompt = async (data: any): Promise<any> => {
  try {
    const response = await axios.post(
      // "https://purefitapi.procamp.dev/ask/docs",
      "http://localhost:4089/ask/docs",
      data,
    );

    return response.data;
  } catch (error) {
    console.error("Error sending diet plan data:", error);
  }
};
