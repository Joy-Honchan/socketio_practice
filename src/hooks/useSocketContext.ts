import { useContext } from 'react'
import SocketContext from 'context/SocketContext'


export default function useSocketContext() {
    const socketManager = useContext(SocketContext)
    return socketManager
}
