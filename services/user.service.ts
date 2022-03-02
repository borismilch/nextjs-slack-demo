import { firestore } from 'lib/firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'

export default class UserService {
  static async checkUser  (userId: string, payload) {
    console.log(payload)
    let user
         
    try {
      user = await getDoc(doc(firestore, 'users', userId))
      console.log(user.data())
    } catch {}

    if (user.data()) { return }

    const {displayName, email, photoURL, uid} = payload

    await setDoc(doc(firestore, 'users', uid), {displayName, email, photoURL, uid})
  }
}