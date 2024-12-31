import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { writeFile } from 'fs/promises';
import path from 'path';
import { NextResponse } from "next/server";
const fs=require('fs');

// Ensure DB connection before handling requests
const LoadDB = async () => {
    try {
        await ConnectDB();
    } catch (error) {
        console.error("Failed to connect to DB:", error);
        throw new Error("Database connection failed");
    }
};

// Run LoadDB to ensure DB is connected before handling any requests
LoadDB();

export async function POST(request) {
    try {
        const formData = await request.formData();
        const timestamp = Date.now();

        const image=formData.get('image');
        const imageByteData=await image.arrayBuffer();
        const buffer=Buffer.from(imageByteData);
        const path=`./public/${timestamp}_${image.name}`;
        await writeFile(path,buffer);
        const imgUrl=`/${timestamp}_${image.name}`

        // const image = formData.get('image');
        // if (!image) {
        //     return NextResponse.json({ success: false, msg: "Image is required" }, { status: 400 });
        // }

        // // Ensure image has a name property before proceeding
        // if (!image.name) {
        //     return NextResponse.json({ success: false, msg: "Image file must have a valid name" }, { status: 400 });
        // }

        // // Use the FileReader to get the binary data of the image
        // const buffer = Buffer.from(await image.arrayBuffer());
        // const filePath = path.join(process.cwd(), 'public', `${timestamp}_${image.name}`);

        // Save the image to disk (ensure the directory exists)
        // await writeFile(filePath, buffer);
        // const imgUrl = `/public/${timestamp}_${image.name}`;

        const blogData = {
            title: `${formData.get('title')}`,
            description: `${formData.get('description')}`,
            category: `${formData.get('category')}`,
            author: `${formData.get('author')}`,
            image: `${imgUrl}`,
            authorImg: `${formData.get('authorImg')}`,
        };

        // Validate required fields
        if (!blogData.title || !blogData.description || !blogData.category || !blogData.author) {
            return NextResponse.json({ success: false, msg: "All fields are required" }, { status: 400 });
        }

        // Save the blog data to the database
        await BlogModel.create(blogData);
        console.log("Blog saved");

        return NextResponse.json({ success: true, msg: "Blog Added" });
    } catch (error) {
        console.error("Error saving blog:", error);
        return NextResponse.json({ success: false, msg: "An error occurred while adding the blog" }, { status: 500 });
    }
}

export async function GET(request) {
    const blogId=request.nextUrl.searchParams.get("id");
    if (blogId) {
        const blog=await BlogModel.findById(blogId);
        return NextResponse.json(blog);
    }else{
    const blogs=await BlogModel.find({});
    return NextResponse.json({blogs});
}
}

export async function DELETE(request){
    const id=await request.nextUrl.searchParams.get('id');
    const blog=await BlogModel.findById(id);
    fs.unlink(`./public${blog.image}`,()=>{
    });
    await BlogModel.findByIdAndDelete(id);
    return NextResponse.json({msg:"Blog Deleted"})

}