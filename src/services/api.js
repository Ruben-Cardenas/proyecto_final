import axios from "axios";

// Esta es tu IP local (igual que en el ESP32)
const API_URL = "http://192.168.68.93/dth11_project/get_data.php";

export const getSensorData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener datos del sensor:", error);
    return [];
  }
};
