import { updatePassword, userRegister } from "@/service/users"

export default async function handler(req, res) {
    if (req.method !== "POST") {
      res.status(400).json({});
    }
    const {fName, email, password, gender } = req.body;
    try {
      const data = await userRegister(fName, email, password, gender);
      res.status(201).json(data)
    } catch(err) {
      res.status(400).json({message: err.message})
    }
  }
// if(req.method === "PATCH"){
//     const {password, rePassword} = req.body;
//     try{
//         const updatePass = await updatePassword(password, rePassword)
//          res.status(201).json(updatePass);
//     }catch(err){
//         res.status(400).json({message:err});
//     }
// }
// res.status(404).send()
  