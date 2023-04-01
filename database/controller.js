// controller
import Users from "../model/users";

//get: http://localhost:3000/api/users
export async function getUsers(req,res) {
    try {
        const users = await Users.find({});
        if(!users){
            res.status(404).json({message:'Data not found'});
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(405).json({error:'fetching error'});
    }
}

//POST: http://localhost:3000/api/users
export async function postUsers(req,res){
    try {
        // const {name,avatar,salary, email,date,status} = req.body;
        // if(!name || !avatar || !salary || !email || !date ||!status){
        //     res.status(302).json({message:'all fields are required!'});
        // }
        const formData = req.body;
        if(!formData){
            return res.status(404).json({message:'please provide form data'});
        }
        Users.create(formData)
        .then((result)=>{
            res.status(200).json(result);
        })
        .catch((error)=>{
            res.status(500).json({message:error});
        })
        
    } catch (error) {
        res.status(405).json({error:'not able to submit user'});
    }
}


export async function putUser(req,res) {
    try {
       const {userId} =  req.query;
       const formData = req.body;
       if(userId && formData){
        const updatedUser = await Users.findByIdAndUpdate(userId,formData);
        res.status(200).json(updatedUser);
       }
       res.status(404).json({message:'data not updated'});
        
    } catch (error) {
        res.status(405).json({error:error})
    }
}


//delete user

export async function deleteUser(req,res) {
    try {
        const {userId} = req.query;
        const deletedUser = await Users.findByIdAndDelete(userId);
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(405).json({error:error});
        
    }

}