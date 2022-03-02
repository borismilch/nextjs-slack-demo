import { IRoom, IUser, TextMessage } from "../models";
import { serverTimestamp } from "firebase/firestore";

import { firestore } from 'lib/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { IMessage } from 'models'
import { Dispatch, SetStateAction } from "react";
import { AnswearSliceActions } from "redux/actions";

import { store } from "redux/store";

export default class MessageService {

  static async sendMessageDirectly (rooms: IRoom[], user: IUser) {
    const room = prompt('where you would like to send message?')
    const existing = rooms?.find(item => item.name === room)

    if (!existing) {
      alert('No rooms found')
      return 
    } 

    const messageBody = prompt("Enter message here please")
    const newmessage: TextMessage = MessageService.createMessage(user, messageBody)

    await MessageService.sendMessage<TextMessage>(existing as any, newmessage)
  }
  

  static async sendMessage <T extends IMessage>(room: IRoom, message: T) {
    const messageRef = collection(firestore, 'rooms', room.id, 'messages')
    await addDoc(messageRef, message)
  }

  static createMessage <T>(
    user: IUser, body:T, role: string = 'text', adressat: string = ''
  ) {
    const message = {
      createdAt: serverTimestamp() as any,
      body,
      userImage: user?.photoURL,
      username: user?.displayName,
      role,
      userId: user?.uid,
      id: "s",
      adressat
    }

    return message 
  }
  static addAdressat (users: IUser[]) {
    const address = prompt('For who?')

    const valid = users?.find(
      (user: IUser) => user.displayName === address || user.email === address
    )

    if (!valid) {
      alert('invalid user') 
      return
    }

    return address
  }

  static async sendRoomMessage <T extends IMessage>(
    updateId: string, roomId: string, message: T
  ) {

    if (updateId) {
      const messageRef = collection(firestore, 'rooms', roomId, 'messages', updateId, 'answears')
      await addDoc(messageRef, message)
      store.dispatch(AnswearSliceActions.cleanMesageComment())
    } else {
      const messageRef = collection(firestore, 'rooms', roomId, 'messages')
      await addDoc(messageRef, message)
    }
  }
}