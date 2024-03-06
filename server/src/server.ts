import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

//? Controllers imports
import { setupDefaultProgram } from './controllers/setupDefaultController';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('public'));

//* Testing Endpoints
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

app.post('/', (req: Request, res: Response) => {
    res.send('Got a POST request');
});

app.put('/', (req: Request, res: Response) => {
    res.send('Got a PUT request');
});

app.delete('/', (req: Request, res: Response) => {
    res.send('Got a DELETE request');
});
//* End of Testing Endpoints

app.post('/setup-program', setupDefaultProgram);

mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log(`running on port: http://localhost:${PORT}`);
    app.listen(PORT);
});
