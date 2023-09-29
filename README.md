# AWS SQS

## Description

This project consists of two JavaScript files, `Sender.js` and `Consumer.js`, which facilitate sending and consuming messages from an AWS Simple Queue Service (SQS) queue. The `Sender.js` script sends a sample message to the specified SQS queue, while the `Consumer.js` script continuously listens to the queue and outputs received messages.

## Prerequisites

Before running the scripts, make sure you have the following:

- AWS account with SQS service configured
- AWS access key and secret key
- AWS SQS queue URL
- Node.js installed on your machine

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/adanzweig/nodejs-aws-sqs.git
    ```

2. Navigate to the project directory:

    ```bash
    cd nodejs-aws-sqs
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the project root and add the following variables:

    ```env
    REGION=your-aws-region
    AWS_KEY=your-aws-access-key
    AWS_SECRET=your-aws-secret-key
    QUEUE_URL=your-sqs-queue-url
    ```

## Usage

### Sender.js

The `Sender.js` script sends a sample message to the specified SQS queue. To run the sender:

```bash
node Sender.js
```

### Consumer.js

The `Consumer.js` script continuously listens to the SQS queue and outputs received messages. To run the consumer:

```bash
node Consumer.js
```

## Important Note

- Ensure that your AWS credentials and SQS queue URL are correctly configured in the `.env` file.

## License

This project is licensed under the [MIT License](LICENSE).
