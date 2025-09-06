import { productModel } from "../models/product.model.js";

class ProductService{
    async getAll(options){
        try {
            return await productModel.find({});
        } catch (error) {
            console.error('Error al leer los productos: ', error);
            throw error;
        }
    }
        
    async create({title, description, code, price, stock, thumbnails, category}){
        try{
            const product = await productModel.findOne({code});

            if(product){
                throw new Error(`El código "${code}" ya existe`);
            }

            const newProduct = {title, description, code, price, stock, thumbnails, category};
            return await productModel.create(newProduct);
        } catch (error) {
            console.error('Error al agregar un producto: ', error);
            throw error;
        }
    }
    
    async getById(id){
        try{
            return await productModel.findById(id);
        } catch (error) {
            console.error('Error al leer un producto por id: ', error);
            throw error;
        }
    }

    async getByCode(code){
        try{
            return await productModel.findOne({code});
        } catch (error) {
            console.error('Error al leer un producto por codigo: ', error);
            throw error;
        }
    }
    
    async update(id,updateData){
        try{
            const product = await productModel.findById(id);
            
            if(product == null) throw new Error(`El producto con ID ${id} no existe`);

            return await productModel.findOneAndUpdate({ _id: id }, updateData, { new: true })
        } catch (error) {
            console.error('Error al actualizar un producto: ', error);
            throw error;
        }
    }
    
    async delete(id){
        try{
            const product = await productModel.findById(id);

            if(product == null) throw new Error(`El producto con ID ${id} no existe`);

            return await productModel.deleteOne({_id:id})
        } catch (error) {
            console.error('Error al eliminar un producto:', error);
            throw error;
        }
    }
}

export default new ProductService;