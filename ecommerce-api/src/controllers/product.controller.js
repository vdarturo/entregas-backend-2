
const getAllProducts = async(req,res)=>{
    res.send({status:"success",message:"Todos los products"});
}

const createProduct = async(req,res)=>{
    res.send({status:"success",message:"Crear product"});
}

const updateProduct = async(req,res)=>{
    res.send({status:"success",message:"Actualizar product"});
}

const deleteProduct = async(req,res)=>{
    res.send({status:"success",message:"Eliminar product"});
}

export default {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct
}