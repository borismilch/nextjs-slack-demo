import { collection, addDoc } from "firebase/firestore";
import { firestore } from "lib/firebase";

export default class LinksService {
  static async addLink (roomId: string) {
    const link = prompt('Enter a link to proseed')
    let valid = link?.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/)

    if (!valid) { alert('wrong url!'); return }

    const name = prompt('Enter name of your link')
    const linksRef = collection(firestore, 'rooms', roomId, 'links')

    await addDoc(linksRef, { name, href: link })
  }
}