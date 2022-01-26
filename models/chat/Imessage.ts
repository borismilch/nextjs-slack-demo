

interface IMessage {
  createdAt: {seconds: number, nanoseconds: number}
  userImage: string 
  username: string 
  role: string 
  userId: string
  id: string
  adressat?: string
}

export default interface TextMessage extends IMessage {
  body: string
}

export interface ImageMessage extends IMessage {
  body: {url: string, id: number }[]
}

export interface IDocumentMessage extends IMessage {
  
}

export interface IVideoMessage extends IMessage {
  
}