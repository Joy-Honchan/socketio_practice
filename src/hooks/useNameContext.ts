import UserNameContext from 'context/UserNameContext'
import { useContext } from 'react'

export default function useUserNameContext() {
    const userName = useContext(UserNameContext)
    return userName
}
