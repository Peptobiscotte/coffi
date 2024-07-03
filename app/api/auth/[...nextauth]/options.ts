import type { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";
import { GithubProfile } from "next-auth/providers/github";
import { MongoClient } from "mongodb"

export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            profile(profile: GithubProfile) {
                return {
                    ...profile,
                    role: profile.role ?? "user",
                    id: profile.id.toString(),
                    image: profile.avatar_url,
                    name: profile.login as string
                }
            },
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        CredentialsProvider({
            name:'Credentials',
            credentials: {
                username: {
                    label: 'Username:',
                    type: 'text',
                    value: 'Max',
                    placeholder: 'your-username'
                },
                password: {
                    label: 'Password:',
                    type: 'password',
                    value: 'Pepto',
                    placeholder: 'your-password'
                }
            },
            
            async authorize(credentials){
                // const user = { id:'16', name:'Max', password:'Pepto', role: "admin",image:'https://images.unsplash.com/photo-1520763185298-1b434c919102?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D'}
                const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_HOST}:${process.env.DB_PASS}@cluster0.bqzxlqw.mongodb.net/?retryWrites=true&w=majority`)
                const db = client.db('users')
                const usersArr = await db.collection("users").find({}).toArray()
                const users = JSON.parse(JSON.stringify(usersArr))

                const userFind = users.find((user:any, index:any) => user.name === credentials?.username)
                return userFind 
                // if(credentials?.username === user.name && credentials.password === user.password) {
                //     return user
                // } else {
                //     return null
                // }
            }
        })
    ],
    callbacks : {
        async jwt({token, user }) {
            if(user) token.role = user.role
            return token
        },
        async session({ session, token }) {
            if(session?.user) session.user.role = token.role
            return session
        }
    }
}