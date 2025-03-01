import axios from "axios";

const API_URL = "https://fedskillstest.coalitiontechnologies.workers.dev/";

export const fetchPatients = async (username, password) => {
    try {
        // Encode credentials in Base64
        const authHeader = `Basic ${btoa(`${username}:${password}`)}`;

        // Make GET request with Authorization header
        const response = await axios.get(API_URL, {
            headers: {
                Authorization: authHeader
            }
        });

        return response.data; 
    } catch (error) {
        console.error("Authentication failed", error);
        return null;
    }
};