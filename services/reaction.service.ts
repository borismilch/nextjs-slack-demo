import { firestore } from "lib/firebase"
import { doc, deleteDoc, updateDoc, addDoc, collection } from 'firebase/firestore'
import { IReaction } from "../models"

export default class ReactionService {
  static async deleteItem (roomId: string, messageId: string) {
    const confirm = prompt('Are you sure?')

    if (!confirm) {
      return
    }
    await deleteDoc(doc(firestore, "rooms", roomId, 'messages', messageId))
  }

  static async updateItem (roomId: string, messageId: string)  {
    const newMessage = prompt('Enter new mesage here')

    if (!newMessage) { alert('wrong new Message');return }

    await updateDoc(doc(firestore, "rooms", roomId, 'messages', messageId), { body: newMessage })
  }

  static addReaction = async (roomId: string, messageId: string, reaction: IReaction, exsistReaction:  IReaction) => {

    if (exsistReaction) {
      await deleteDoc(doc(firestore, 'rooms', roomId, 'messages', messageId, 'reactions', exsistReaction.id))
    }

    else {
      await addDoc(collection(firestore, 'rooms', roomId, 'messages', messageId, 'reactions'), reaction)
    }

  }
}