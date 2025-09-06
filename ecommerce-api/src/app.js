import express from "express"
import mongoose from 'mongoose';
import { PORT, USER_DB, PASWORD_DB } from './common/conts.js'
import productRouter from './routes/product.router.js';
import cartRouter from './routes/cart.router.js';

const app = express();

app.use(express.json());
app.use('/api/products/', productRouter);
app.use('/api/carts/', cartRouter);

mongoose.connect(`mongodb+srv://${USER_DB}:${PASWORD_DB}@cluster0.u8h7hn5.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0`)
.then(()=>console.log('Conexion a base de datos'))
.catch(err=>console.log(err))

app.listen(PORT, ()=>{
    console.log(`Servidor en http://localhost:${PORT}`);
});