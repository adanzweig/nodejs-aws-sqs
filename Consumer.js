// Import the required AWS SDK module for SQS
const {SQS} = require('@aws-sdk/client-sqs');
// Import the 'dotenv' module for handling environment variables
require('dotenv').config();

/**
 * Asynchronous function to consume messages from an SQS queue
 * @param {Object} sqs - An instance of the SQS client
 * @param {string} queueUrl - URL of the SQS queue to consume messages from
 */
async function awsSQSConsumer(sqs, queueUrl) {
    // Continuously listen for messages from the SQS queue
    while (true) {
        try {
            // Use the SQS SDK to receive messages with specified parameters
            const {Messages} = await sqs.receiveMessage({
                QueueUrl: queueUrl,
                MaxNumberOfMessages: 1, // Maximum number of messages to retrieve
                WaitTimeSeconds: 10 // Wait time for long polling in seconds
            });

            // If no messages are received, continue listening
            if (!Messages) continue;

            // Log the parsed body of the received message
            console.log(JSON.parse(Messages[0].Body));
        } catch (error) {
            // If an error occurs during message retrieval, log the error message
            console.error('Error', error);
        }
    }
}

// Asynchronous IIFE (Immediately Invoked Function Expression) for consuming messages
(async () => {
    // Create an SQS client instance with specified AWS credentials and region
    const sqs = new SQS({
        region: process.env.REGION,
        credentials: {
            accessKeyId: process.env.AWS_KEY,
            secretAccessKey: process.env.AWS_SECRET
        }
    });

    // Call the function to start consuming messages from the specified queue
    await awsSQSConsumer(sqs, process.env.QUEUE_URL);
})();
