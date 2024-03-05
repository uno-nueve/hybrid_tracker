import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('public'));

//? Endpoints
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

app.listen(PORT, () => {
    console.log(`running on port: http://localhost:${PORT}`);
});
