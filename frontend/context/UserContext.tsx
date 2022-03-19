import { createContext, useContext } from 'react'

export interface UserContextState {
    loginInfo: any
}

export interface UserContextType {
    value: UserContextState
    setValue: (value: any) => void
}

const UserContext = createContext<UserContextType>({} as UserContextType)

export default UserContext
