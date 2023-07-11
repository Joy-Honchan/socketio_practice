import { createContext } from 'react'
import io from 'socket.io-client'
import type { Socket } from 'socket.io-client'

export const socket = io('http://localhost:8080')

const SocketContext = createContext<Socket | undefined>(undefined)
export default SocketContext
