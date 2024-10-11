import amqp from "amqplib/callback_api";

// Connect to RabbitMQ and create a channel
let channel = null;

const connectToBroker = () => {
    amqp.connect("amqp://localhost", (error0, connection) => {
        if (error0) {
            throw error0;
        }
        connection.createChannel((error1, ch) => {
            if (error1) {
                throw error1;
            }
            channel = ch;
            console.log("Connected to RabbitMQ");
        });
    });
};

// Function to publish events
const publishEvent = (queue, message) => {
    if (!channel) {
        console.error("No RabbitMQ channel established yet.");
        return;
    }
    channel.assertQueue(queue, { durable: true });
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
    console.log(`Message sent to queue: ${queue}`);
};

export { connectToBroker, publishEvent };