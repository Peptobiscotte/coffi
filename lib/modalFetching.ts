'use server'

export default async function modalFetching(memberData:any) {
    await fetch(process.env.URL + '/api/newMember', {
        method: 'POST',
        body: JSON.stringify(memberData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}