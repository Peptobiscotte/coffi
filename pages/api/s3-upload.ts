import type { NextApiRequest, NextApiResponse } from 'next'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import formidable, { File } from 'formidable';

const s3Client = new S3Client({
    region: process.env.NEXT_AWS_S3_REGION,
    credentials: {
        accessKeyId: process.env.NEXT_AWS_S3_ACCESS_KEY_ID ?? '',
        secretAccessKey: process.env.NEXT_AWS_S3_SECRET_ACCESS_KEY ?? '',
    }
})

const dateId = new Date().getTime()

export default async function handler(req: any, res: NextApiResponse) {
    if(req.method === 'POST') {
       
    console.log(req.body)
        

            const params = {
                Bucket: process.env.NEXT_AWS_S3_BUCKET_NAME,
                Key: `${dateId}`,
                Body: req.body,
                ContentType: 'image/jpg'
            }
        
            const command = new PutObjectCommand(params)
            console.log(command)
            try {
                const response = await s3Client.send(command)
                console.log('file uploaded', response)
                return 
            } catch (error) {
                throw error
            }
        
        }
        res.status(201).json({ message: 'yo'})
    }

