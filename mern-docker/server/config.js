import dotenv from "dotenv";
dotenv.config();

const mongodbURL = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER_NAME}.3c4n0v3.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.MONGODB_APP_NAME}`;

export { mongodbURL };
