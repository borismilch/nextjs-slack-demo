import { makeAutoObservable } from 'mobx'
import { Ref } from 'react'

class SendingImagesStore {

  images: {url: string, id: number}[] = []
  files: File[] = [] as File[]

  fileInputRef: Ref<HTMLInputElement> = null 

  canUpload: boolean = false as boolean

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

  removeImage (idx: number) {
    this.images = this.images.filter((item, i) =>  i !== idx)
    this.files = this.files.filter((item, i) => i !== idx)

  }

  cleanImages () {
    this.images = []
    this.files = []
  }

  addFile (file: File) {
    this.files.push(file)
  }

} 

export default new SendingImagesStore()