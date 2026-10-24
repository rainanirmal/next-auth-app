import { getDataFromToken } from "@/src/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/src/models/userModel";
import { connect } from "@/src/dbConfig/dbConfig"; 

connect();

export async function GET(request: NextRequest) {

    try {

        const userId = getDataFromToken(request);

        const user = await User.findById(userId).select('-password');

        return NextResponse.json(
            {
                message: "User fetched successfully",
                data: user
            },
            {
                status: 200
            }
        )  
        
    } catch (error:any) {
        
        return NextResponse.json(
            {
                error: error.message
            },
            {
                status: 400
            }
        )
    }
}