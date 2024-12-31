import { ConnectDB } from "@/lib/config/db";
import EmailMode from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";

const LoadDB=async()=>{
    await ConnectDB();
}
LoadDB();

export async function POST(request) {
    const formData=await request.formData();
    const emailData={
        email:`${formData.get('email')}`,
    }
    await EmailMode.create(emailData);
    return NextResponse.json({success:true,msg:"Email Subscribed"})
}

export async function GET(request){
    const emails=await EmailMode.find({});
    return NextResponse.json({emails});
}

export async function DELETE(request){
    const id =await request.nextUrl.searchParams.get("id");
    await EmailMode.findOneAndDelete(id);
    return NextResponse.json({success:true,msg:"email deleted"});
}