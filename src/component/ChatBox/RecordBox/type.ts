interface AnnouncementType {
    type: 0
    message: string
}

export interface ConversationType {
    type: 1 | 2 // 1:received msg 2:sent msg
    userName: string
    time: string
    message: string
}


export type MsgType = AnnouncementType | ConversationType