import ConnectMongo from "../../../database/conn";
import { getUsers,putUser,deleteUser } from "../../../database/controller";
export default async function handler(req,res) {
    ConnectMongo().catch(()=>res.status(405).json({message:'Error in the connection'}))
    const {method} = req;
    switch(method){
        case 'GET':
            getUsers(req,res);
            break;
        case 'PUT':
            putUser(req,res);
            break;
        case 'DELETE':
            deleteUser(req,res);
            break;
        default:
            res.setHeader(`allowed ['GET','PUT','DELETE']`);
            res.status(405).end(`method ${method} not allowed in this API`);
    }
}