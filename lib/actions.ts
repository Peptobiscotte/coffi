
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"

const s3Client = new S3Client({
    region: process.env.NEXT_AWS_S3_REGION,
    credentials: {
        accessKeyId: process.env.NEXT_AWS_S3_ACCESS_KEY_ID ?? '',
        secretAccessKey: process.env.NEXT_AWS_S3_SECRET_ACCESS_KEY ?? '',
    }
})

export async function uploadActionFileToS3(file:any, fileName:any) {

    const params = {
        Bucket: process.env.NEXT_AWS_S3_BUCKET_NAME,
        Key: `${fileName}`,
        Body: file,
        ContentType: 'image/jpg'
    }

    const command = new PutObjectCommand(params)
    try {
        const response = await s3Client.send(command)
        console.log('file uploaded', response)
        return fileName  
    } catch (error) {
        throw error
    }

}