import { getByEmail, verifyPassword } from "@/service/users"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    session: {
        jwt: "true",
    },
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: "Credentials",
            async authorize ({email, password}){ 
                const user = getByEmail(email);
                if(!user){
                      throw new Error('user does not exist');
                }
                const isValid = await verifyPassword(password, user.password)
                if(!isValid){
                    throw new Error('incorrect password');
                }
    
                return {email}
            }
        }),
        // ...add more providers here
      ],
    }
  export default NextAuth(authOptions)