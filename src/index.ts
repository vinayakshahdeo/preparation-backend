import express, { Application, Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import config from './config';
const app: Application = express();

// mongoose
// 	.connect(config?.MONGODB_URL, {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	})
// 	.then((result: any) => console.log('db connected'))
// 	.catch((error: any) => console.error({ error }));

app.listen(config?.SERVER_HOSTNAME, () => {
	console.log('server running at port ', config?.SERVER_HOSTNAME);
});
