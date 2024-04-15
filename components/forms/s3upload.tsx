'use client'
import { useState } from "react"

export default function UploadForm() {  
    
    const [file, setFile] = useState()

    const handleFileChange = (event:any) => {
        setFile(event.target.files[0]);
      };

    async function submitHandler(e:any) {
        e.preventDefault()
        
        if(!file) {
            console.error('no file selected')
            return
        }
        
        const formData  = new FormData()
        formData.append('file', file)     
        
        try {        
            const response = await fetch('/api/s3-upload', {
                method: 'POST',
                body: formData,
            })

        const data = await response.json()
        console.log(data)
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
