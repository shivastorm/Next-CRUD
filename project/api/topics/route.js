import connectMongoDB from "@/libs/Mongodb";
import Topic from "@/models/Topics";
import { NextResponse } from "next/server";


export async function POST(request) {
    console.log(" request=====>",request);
    const { title, description } = await request.json();
    await connectMongoDB();
   
    await Topic.create({ title, description });
    return NextResponse.json({ message: "Topic created" }, { status: 201 });
 
}
