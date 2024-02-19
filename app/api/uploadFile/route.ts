import { NextRequest, NextResponse } from "next/server";
import { writeFile } from 'fs/promises'
import { join } from "path";

// export async function POST(request: NextRequest) {
//     const data = await request.formData()
//     const file: File | null = data.get('file') as unknown as File

//     if(!file){
//         return NextResponse.json({success: false})
//     }
//     const bytes = await file.arrayBuffer()
//     const buffer = Buffer.from(bytes)

//     // const path = join('/','tmp', file.name)
//     const path = `/tmp/${file.name}`
//     await writeFile(path, buffer)
//     console.log(`open ${path} to see the uploaded file`)

//     return NextResponse.json({ success: true })
// }
// export async function POST(request: Request): Promise<Response> {
//     const blob = await request.blob();
  
//     console.log(blob);
  
//     return new Response();
// }
//Multi file upload
export async function POST(request: Request): Promise<Response> {
    const formData = await request.formData();
  
    console.log(formData.getAll('files'));
  
    return new Response();
}