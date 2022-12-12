import {Router} from 'express';
import Yoga from "../models/Yoga.js";

const yogaRouter = Router();

yogaRouter.post('/insert', async(req,res) => {   
    try {
        if(req.body.name == ""){
            return res.status(400).send({
                "success":false,
                "message":"Please Input Name"
            });
        }
        if(req.body.email == ""){
            return res.status(400).send({
                "success":false,
                "message":"Please Input Email"
            });
        }
        if(req.body.phoneNumber == ""){
            return res.status(400).send({
                "success":false,
                "message":"Please Input PhoneNumber"
            });
        }
        if(!req.body.dob){
            return res.status(400).send({
                "success":false,
                "message":"Please Input DOB"
            });
        }

        if(!req.body.gender){
            return res.status(400).send({
                "success":false,
                "message":"Please Input gender"
            });
        }

        if(!req.body.slot){
            return res.status(400).send({
                "success":false,
                "message":"Please Input slot"
            });
        }

        const temp = {
            name:req.body.name,
            email:req.body.email,
            phoneNumber:parseInt(req.body.phoneNumber),
            age:parseInt(getAge(req.body.dob)),
            gender:req.body.gender,
            slot:req.body.slot
        }

        if(temp.age < 18) {
            return res.status(400).send({
                "success":false,
                "message":"Age should be greater than 18"
            });
        }

        if(temp.age > 65) {
            return res.status(400).send({
                "success":false,
                "message":"Age should be less than 65"
            });
        }
        const newEntry = new Yoga(temp);
        try{
            if(successPayment()){
                try{
                    const savedEntry = await newEntry.save();
                    return res.status(201).send({
                        "success":true,
                        "message":"Registration Successful!",
                        "data":savedEntry
                    })
                }catch(err){
                    return res.status(400).send({
                        "success":false,
                        "message":err.msg
                    });
                }
            }else{
                return res.status(400).send({
                    "success":false,
                    "message":"Payment Failed!"
                });
            }

        }catch(err){
            return res.status(400).send({
                "success":false,
                "message":err.msg
            });
        }
    }catch(err){
        return res.status(400).send({
            "success":false,
            "message":err.msg
        });
    }
})

const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)

const successPayment = () => {
    return true;
}

export default yogaRouter;