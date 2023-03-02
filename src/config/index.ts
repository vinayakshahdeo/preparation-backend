import dotenv from 'dotenv';

dotenv.config();
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 80;
const MONGODB_URL = process.env.MONGODB_URL || '';
export default {
	SERVER_HOSTNAME,
	SERVER_PORT,
	MONGODB_URL,
};
