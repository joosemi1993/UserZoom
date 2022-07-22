import express from 'express';
import cors from 'cors';

const app = express();
const PORT=8080;

app.use(express.json());
app.use(cors());

app.get('/', (req,res)=>{
    res.send('Welcome to UserZoom app!')
})

app.listen(PORT,()=>console.log(`Server started on port ${PORT}...`))