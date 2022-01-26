import { makeAutoObservable } from 'mobx'

class SendingImagesStore {

  images: {url: string, id: number}[] = []
  canUpload: boolean = false as boolean
  controll: boolean = false 

  constructor() {
    makeAutoObservable(this)
  }

  changeCanUpload (val: boolean) {
    this.canUpload = val
  }

  addImage (url: string) {
    this.canUpload = false
    this.images.push({url, id: Date.now()})
  }

  removeImage (id: number) {
    this.images = this.images.filter(item => item.id !== id)
  }

  cleanImages () {
    this.images = []
  }

  toggleControll () {

    this.controll = !this.controll
    console.log(this.controll)
  }

} 

export default new SendingImagesStore()