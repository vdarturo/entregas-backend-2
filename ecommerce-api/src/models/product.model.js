import {Schema, model} from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const productSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    code:{
        type: String,
        required: true,
        unique: true,
    },
    price:{
        type: Number,
        required: true,
    },
    stock:{
        type: Number,
        required: true,
    },
    thumbnails:{
        type: String,
        required: true,
    },
});

productSchema.plugin(mongoosePaginate);

export const productModel = model('product', productSchema);