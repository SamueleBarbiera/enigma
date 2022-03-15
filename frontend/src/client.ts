import { User } from 'next-auth'
import axios from 'axios'

export interface SignUpData {
    email: string
    password: string
    name?: string
    image?: string
}

export const signUp = async (data: SignUpData) => {
    const res = await axios.post<User>('https://api.sanity.io/v2021-06-07/projects/fxcvqb31/users', {
        ...data,
    })

    return res.data
}
