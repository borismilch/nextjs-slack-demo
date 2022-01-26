

export default interface IMessage {
  createdAt: {seconds: number, nanoseconds: number}
  body: string 
  userImage: string 
  username: string 
  role: string 
  userId: string
  id: string
  adressat?: string
}
