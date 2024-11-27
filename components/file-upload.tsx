"use client"


import { X } from "lucide-react";

import Image from "next/image";
import { UploadDropzone } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css";
interface FileUpLoadProps {
    onChange: (url?: string) => void;
    value: string;
    endpoint: "messageFile" | "serverImage"
}
export const FileUpload = ({
    onChange,
    value,
    endpoint
}: FileUpLoadProps) => {

    const fileType = value?.split(".").pop();

    if(value && fileType!=="pdf"){
        return (
            <div>
                <Image
                  fill
                  src={value}
                  alt="Upload"
                  className="rounded-full"
                />
            </div>
        )
    }
    return (
        <UploadDropzone
            endpoint={endpoint}
            onClientUploadComplete={(res) => {
                onChange(res?.[0].url);
            }}
            onUploadError={(error) => {
                console.log(error);
            }}
        />
    )
}