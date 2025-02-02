import express from "express";
import {Response,Request} from "express";
// import {prisma} from "@repo/db/client"


const app = express();

app.use(express.json());

// app.post("/user",async(req:Request,res:Response)=>{
//   try {
//     await prisma.user.create({
//       data:{

//       }
//     })
//   } catch (error) {
    
//   }
// })


app.use("/", (req:Request, res:Response) => {
  res.status(200).json({ message: "Hello" });
});

app.listen(3003, () => {
  console.log("server is on");
});
