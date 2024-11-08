// Import the Axios library for making HTTP requests
import axios from 'axios';

// Define the NightOwlClient class
class NightOwlClient {
    // Constructor that takes the API URL as a parameter
    constructor(apiUrl) {
        // Store the API URL in the class instance
        this.apiUrl = apiUrl;
    }

    // Asynchronous method to log data
    async log(tag, message, data) {
        try {
            // Send a POST request to the /api/add endpoint with the provided tag, message, and data
            await axios.post(`${this.apiUrl}/api/add`, {
                tag,
                message,
                data,
            });
            console.log('Log sent successfully');
        } catch (error) {
            // Log any errors that occur during the logging process
            console.error('Error logging data:', error);
        }
    }

    // Asynchronous method to retrieve logs
    async getLogs(tag) {
        try {
            console.log('Retrieving logs for tag:', tag);
            // Send a POST request to the /api/get endpoint with the provided tag
            const response = await axios.post(`${this.apiUrl}/api/get`, {
                tag,
            });
            console.log('Logs retrieved successfully');
            // Return the response data
            return response.data;
        } catch (error) {
            // Log any errors that occur during the log retrieval process
            console.error('Error retrieving logs:', error);
            // Return an empty array in case of an error
            return [];
        }
    }
}

// Export a function that initializes the NightOwlClient with the provided API URL
export default function initNightOwlClient(apiUrl) {
    return new NightOwlClient(apiUrl);
}