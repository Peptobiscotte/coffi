import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"
import { useState } from "react"
import { uploadActionFileToS3 } from "@/lib/actions"

async function uploadFileToS3(file:any, fileName:any, creds:any) {

    const params = {
        Bucket: 'mycoffibucket',
        Key: `${fileName}`,
        Body: file,
        ContentType: 'image/jpg'
    }

    const command = new PutObjectCommand(params)
    try {
        const response = await creds.send(command)
        console.log('file uploaded', response)
        return fileName  
    } catch (error) {
        throw error
    }

}

export default function UploadForm(props:any) {
    const {creds} = props
    
    const s3Client = new S3Client({
        region: creds.region,
        credentials: {
            accessKeyId: creds.accessKey ?? '',
            secretAccessKey: creds.secretAccessKey ?? '',
        }
    })
    
    const [file, setFile] = useState()

    const handleFileChange = (event:any) => {
        setFile(event.target.files[0]);
      };

    async function submitHandler(e:any) {
        e.preventDefault()
        try {
            
        if(!file) {
            console.error('no file selected')
            return
        }
        
        console.log(file['name'])

        await uploadFileToS3(file, file['name'], s3Client)
        // await fetch('/api/s3-upload', {
        //     method: 'POST',
        //     body: file,
        // })

        } catch (error) {
            return { error }
        }
    }

    return(

        <div>
            <form onSubmit={submitHandler}>
                <input type="file" id="file" name="file" accept="images/*" onChange={handleFileChange}/>
                <button type="submit" className="border bg-slate-400">Upload File</button>
            </form>
        </div>
    )
}
