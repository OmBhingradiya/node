//  const express = require("express");
// // const router = express.Router();
// // const Joi = require("joi");
// // const bcrypt = require("bcrypt");
// // const { default: mongoose } = require("mongoose");
//  var jwt = require("jsonwebtoken");
//  const {Base64} = require('js-base64');





//  token = "eyJhbGciOiJIUzI1NiJ9.NjMzZTVkMWJhNDNkMmRlYjQ3NTE1NGI0.0S1WmkUkuAtVYSudQ1FeMcKVKVUmQowXqfpcgUF1qZI"

//  const tokenencode = Base64.encode(token);
//     console.log("this is base64 of token1>>>>", tokenencode)

//     const token123 = jwt.sign({ tokenencode }, "123456")
//     console.log("this is token#############", token123)



//     const tokendecode = Base64.decode(token123);
//     console.log("this is base64 of token1>>>>", tokendecode)







// // // const {employee} = require('../models/employees')
// // const EmployeeModel = require("../models/employees");
// // const { findById } = require("../models/employees");

// // //##### JOI #####
// // pattern = "/^[0-9+]{7}-[0-9+]{1}$/";
// // const Schema = Joi.object().keys({
// //   email: Joi.string().required(),

// //   // password: Joi.string().min(8),
// //   //  repeat_password: Joi.ref('password'),

// //   // phone: Joi.string().length(10)
// // });

// // //find email
// // router.post("/find/email", async (req, res) => {
// //   const payload = req.body;
// //   const emailUser = EmployeeModel.findOne({ email: payload.email });
// //   if (!emailUser) {
// //     res.status(422).json({ message: "email does not exist in database" });
// //     return;
// //   }
// // //   const userId = emailUser.id;
// //   var token = jwt.sign(emailUser.id, process.env.AES_KEY);

// //   const updatedUser = EmployeeModel.findByIdAndUpdate(userId, { token }, { new: true });
// //   console.log(updatedUser.token)

  

// //   //base64 convert
  
 
// //   const base641 = Base64.encode(token); 
// //   console.log("this is base64 of token2",base641);
  
// //   // //jwt sign token
// //    const token2 = jwt.sign({ base641 }, process.env.AES_KEY);

// //   // //base64 convert
// //   // const base64Token2 = "ijijo"
// //   // //response send

// //   const base642 = Base64.encode(token2); 
// //   console.log("this is base 64 of token2",base642);

// // });

// // //Get list of all employees

// // router.get("/api/employees", (req, res) => {
// //   EmployeeModel.find({}, (err, data) => {
// //     if (!err) {
// //       res.send(data);
// //     } else {
// //       console.log(err);
// //     }
// //   });
// // });

// // //Get single employee
// // router.get("/api/employee/:id", (req, res) => {
// //   EmployeeModel.findById(req.params.id, (err, data) => {
// //     if (!err) {
// //       res.send(data);
// //     } else {
// //       console.log(err);
// //     }
// //   });
// // });

// // //password

// // //add new employee
// // router.post("/api/employee/add", async (req, res) => {
// //   const payload = req.body;
// //   console.log(payload);
// //   if (Schema.validate(payload).error) {
// //     res.status(422).json({
// //       code: 422,
// //       message: "Employee not added.Please check email and password",
// //     });
// //   }

// //   const payLoadValue = Schema.validate(payload).value;

// //   const unique = payLoadValue.email;
// //   console.log(unique, "unique");
// //   const exist = await EmployeeModel.findOne({ email: unique });
// //   console.log(exist);
// //   if (exist) {
// //     res.status(422).json({ code: 422, message: "Email already exist" });
// //     return;
// //   }

// //   const data = new EmployeeModel(payLoadValue);
// //   const save = await data.save();
// //   res.send(save);

// //   // EmployeeModel.save(( data) => {

// //   //         // res.send(data);
// //   //         res.status(200).json({code: 200, message: 'Employee Added Successfully', addemployee: data})

// //   // });
// // });

// // /*//update the data
// // router.put('/api/employee/edit/:id',(req,res)=>{
// //     const emp = {
// //         firstName: req.body.firstName,
// //         lastName: req.body.lastName,
// //         email: req.body.email,
// //         password: req.body.password,
// //         phone: req.body.phone,
// //         Designation: req.body.Designation
// //     };
// //     EmployeeModel.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,data)=>{
// //         if(!err){
// //             res.status(200).json({code:200, message:'Employee updated successfully',updateemployee:data})
// //         }
// //         else{
// //             console.log(err);
// //         }
// //     })
// // })*/

// // /*//delete employee

// // router.delete('/api/employee/delete/:id',(req,res)=>{
// //     EmployeeModel.findByIdAndRemove(req.params.id,(err,data)=>{
// //         if(!err){
// //             res.status(200).json({code:200, message:'Employee deleted successfully',deleteemployee:data})
// //         }
// //     });
// // });
// // */

// // router.post("/api/employee/reset/:id", async (req, res) => {
// //   const userId = req.params.id;
// //   const user = await EmployeeModel.findById(userId);
// //   console.log(user);
// //   console.log(req.body);
// //   if (user.email == req.body.email && user.password == req.body.oldPassword) {
// //     console.log("SSSSSSSS");
// //     const update = await EmployeeModel.findByIdAndUpdate(userId, {
// //       password: req.body.newPassword,
// //     });
// //     console.log(update);
// //     res.status(200).json({ update });
// //   }
// // });
// // module.exports = router;





// // //find email
// // router.post("/find/email",  (req, res) => {
// //     const payload = req.body;
// //     const emailUser = EmployeeModel.findOne({ email: payload.email });
// //     if (!emailUser) {
// //       res.status(422).json({ message: "email does not exist in database" });
// //       return;
// //     }
// //     //   const userId = emailUser.id;
// //     var token = jwt.sign(emailUser.id, process.env.AES_KEY);
  
// //     const updatedUser = EmployeeModel.findByIdAndUpdate(
// //       emailUser.id,
// //       { token },
// //       { new: true }
// //     );
  
// //     //base64 convert
  
// //     const token1base = Base64.encode(token);
// //     console.log("this is base64 of token2", token1base);
  
// //     // //jwt sign token
// //     const token2 = jwt.sign({ base641 }, process.env.AES_KEY);
  
// //     // //base64 convert
// //     // const base64Token2 = "ijijo"
// //     // //response send
  
// //     const token2base = Base64.encode(token2);
// //     console.log("this is base 64 of token2", token2base);
// //   });
  

// // this is base64 of token1>>>> ZXlKaGJHY2lPaUpJVXpJMU5pSjkuTmpNelpUVmtNV0poTkROa01tUmxZalEzTlRFMU5HSTAuMFMxV21rVWt1QXRWWVN1ZFExRmVNY0tWS1ZVbVFvd1hxZnBjZ1VGMXFaSQ==
// // this is base 64 of token2>>>> ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjBiMnRsYmpGaVlYTmxJam9pV2xoc1MyRkhTa2haTW14UVlWVndTbFpZY0VwTlZUVndVMnByZFZSdGNFNWxiSEJWVm0xMFRsWXdjRzlVYTFKUFlUQXhkRlZ0ZUZwaGJFVjZWR3hTUmsxVk5VaFRWRUYxVFVaTmVGWXlNWEpXVjNReFVWaFNWMWRXVGpGYVJrVjRVbTFXVGxrd2RGZFRNVnBXWWxaR2RtUXhhSGhhYmtKcVdqRldSMDFZUm1GVFVUMDlJaXdpYVdGMElqb3hOalkxTURVMk9UVXpmUS4zVDgzM0EzMmV1VGRoU2VBdlRTOUhoVUo2NV9QS3pZMXBVVWtBV2hvdXBN
