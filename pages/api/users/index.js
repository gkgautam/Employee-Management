// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import ConnectMongo from "../../../database/conn";
import { getUsers,postUsers,putUser } from "../../../database/controller";
export default function handler(req, res) {
  ConnectMongo().catch(()=>res.status(405).json({error:"error in the connection"}));
 const {method} = req;
 switch(method){
  case 'GET' :
    getUsers(req,res);
    break;
  case 'POST':
    postUsers(req,res);
    break;
  case 'PUT':
    putUser(req,res);
    break;
  case 'DELETE':
    res.status(200).json({method,name:"DELETE request"});
    break;
  default:
    res.setHeader(`allow,['GET','POST','PUT','DELETE']`);
    res.status(405).end(`method ${method} not allowed!`);
 }
}
