import { connect } from "@/src/dbConfig/dbConfig";  
import User from "@/src/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request:NextRequest) {

    try {

        const reqBody = await request.json();
        const {email, password} = reqBody;

        // console.log(reqBody);   
        
        const user = await User.findOne({email});

        if(!user) {
            return NextResponse.json(
                {
                    error: "User does not exist"
                },
                {
                    status: 404
                }
            )
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if(!isPasswordCorrect) {
            return NextResponse.json(
                {
                    error: "Invalid credentials"
                },
                {
                    status: 401
                }
            )
        }

        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        const token = await jwt.sign(
            { 
                tokenData
            },
            process.env.TOKEN_SECRET!,
            { 
                expiresIn: "1d" 
            }
        )
        
        const response = NextResponse.json(
            {
                message: "User logged in successfully",
                success: true,
                token
            },
            {
                status: 200
            }
        )

        response.cookies.set("token", token, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 // 1 day
        });

        return response;

    } catch (error) {
        
        return NextResponse.json(
            {
                error: "Internal server error"
            },
            {
                status: 500
            }
        )
    }
}

connect();