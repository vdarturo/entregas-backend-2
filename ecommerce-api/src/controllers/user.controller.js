
const getAllUsers = async(req,res)=>{
    res.send({status:"success",message:"Todos los users"});
}

const createUser = async(req,res)=>{
    res.send({status:"success",message:"Crear user"});
}

const updateUser = async(req,res)=>{
    res.send({status:"success",message:"Actualizar product"});
}

const deleteUser = async(req,res)=>{
    res.send({status:"success",message:"Eliminar product"});
}

export default {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
}