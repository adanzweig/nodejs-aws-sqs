// Import the required AWS SDK module for SQS
const {SQS} = require('@aws-sdk/client-sqs');
// Import the 'dotenv' module for handling environment variables
require('dotenv').config();

// Function to send a message to SQS
async function awsSendMessage(sqs, params) {
    try {
        // Use the SQS SDK to send a message with the specified parameters
        const data = await sqs.sendMessage(params);
        // Return the response data
        return data;
    } catch (error) {
        // If an error occurs, log the error message
        console.error('Error:', error);
    }
}

// Asynchronous IIFE (Immediately Invoked Function Expression) for sending a message
(async () => {
    // Create an SQS client instance with specified AWS credentials and region
    const sqs = new SQS({
        region: process.env.REGION,
        credentials: {
            accessKeyId: process.env.AWS_KEY,
            secretAccessKey: process.env.AWS_SECRET
        }
    });

    // Define the parameters for the message
    const params = {
        MessageBody: JSON.stringify({'message': 'Hello', 'from': '@CodingWithAdo'}),
        QueueUrl: process.env.QUEUE_URL
    };

    // Call the function to send a message and await the response
    const response = await awsSendMessage(sqs, params);
    // Log the response data
    console.log(response);
})();
