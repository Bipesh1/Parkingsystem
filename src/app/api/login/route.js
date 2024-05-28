import {connect} from "../../../dbconfig/dbConfig"
import User from "../../../models/usersModel"
import {NextRequest, NextResponse} from "next/server"
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"

connect()

export async function POST(request){
try{
    const reqBody= await request.json();
    const {email,password}= reqBody;

    //check if user exists
    const user= await User.findOne({email})
    if(!user){
        return NextResponse.json({error:"User doesnot exist"},{status:400})
    }
    const validPassword = await bcryptjs.compare(password,user.password)
    if(!validPassword){
        return NextResponse.json({error:"Invalid Password"})
    }
    //create token data
    const tokenData={
        id: user._id,
        username: user.username,
        email: user.email
    }
    const token =await jwt.sign(tokenData,process.env.TOKEN_SECRET, {expiresIn:"1d"})
    const response = NextResponse.json({
        message:"Login Successful"
    })
    response.cookies.set("token",token,{
        httpOnly:true,
    })
    return response;


}
catch(error){
    return NextResponse.json({error:error.message, status:500})
}
} 