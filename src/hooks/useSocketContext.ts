import { useContext } from 'react'
import SocketContext from 'context/socketContext'


export default function useSocketContext() {
    const socketManager = useContext(SocketContext)
    return socketManager
}
