import express from "express"
import config from "./config/config.js";
import productRouter from './routes/product.router.js';
import cartRouter from './routes/cart.router.js';
import userRouter from './routes/user.router.js';

const app = express();
const PORT = config.PORT

app.use(express.json());
app.use('/api/products',productRouter);
app.use('/api/carts',cartRouter);
app.use('/api/users',userRouter);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
})