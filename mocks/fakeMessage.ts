import { IDocumentMessage, ImageMessage, IMessage, IVideoMessage } from "models";
import { fakeImages } from "./fakeImages";
import { fakeDocuments } from "./fakeDocuments";

const newMessage: IMessage = 
  {
    createdAt: { seconds: 222222, nanoseconds: 32323 },
    id: "some new id",
    role: "text",
    userId: "dkssklsjkjskdskdls",
    userImage: "https://lh3.googleusercontent.com/ogw/ADea4I7wkhkYJIJdcEsb8qpcUEKxiG1VGrIDMsHKqpAnbw=s32-c-mo",
    username: 'stsepa'
  }

export default newMessage  

export const fakeImageMessage: ImageMessage = {
  createdAt: { seconds: 222222, nanoseconds: 32323 },
  id: "some new id",
  role: "image",
  userId: "dkssklsjkjskdskdls",
  userImage: "https://lh3.googleusercontent.com/ogw/ADea4I7wkhkYJIJdcEsb8qpcUEKxiG1VGrIDMsHKqpAnbw=s32-c-mo",
  username: 'stsepa',
  body: fakeImages
  
}

export const fakeVideomessage: IVideoMessage = {
  createdAt: { seconds: 222222, nanoseconds: 32323 },
  id: "some new id",
  role: "video",
  userId: "dkssklsjkjskdskdls",
  userImage: "https://lh3.googleusercontent.com/ogw/ADea4I7wkhkYJIJdcEsb8qpcUEKxiG1VGrIDMsHKqpAnbw=s32-c-mo",
  username: 'stsepa',
  body: fakeImages[0]
}


export const fakeDocumentMessage: IDocumentMessage = {
  createdAt: { seconds: 222222, nanoseconds: 32323 },
  id: "some new id",
  role: "document",
  userId: "dkssklsjkjskdskdls",
  userImage: "https://lh3.googleusercontent.com/ogw/ADea4I7wkhkYJIJdcEsb8qpcUEKxiG1VGrIDMsHKqpAnbw=s32-c-mo",
  username: 'stsepa',
  body: fakeDocuments
}