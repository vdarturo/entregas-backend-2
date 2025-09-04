
const getAllCarts = async(req,res)=>{
    res.send({status:"success",message:"Todos los carts"});
}

const createCart = async(req,res)=>{
    res.send({status:"success",message:"Crear cart"});
}

const updateCart = async(req,res)=>{
    res.send({status:"success",message:"Actualizar cart"});
}

const deleteCart = async(req,res)=>{
    res.send({status:"success",message:"Eliminar cart"});
}

export default {
    getAllCarts,
    createCart,
    updateCart,
    deleteCart
}