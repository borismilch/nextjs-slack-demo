import { makeAutoObservable, observable } from 'mobx'

import { IUser } from '@/models/.'

class AuthStore {

  isLogeed = false as boolean
  user: IUser = observable({} as IUser)
  isLoaded: boolean = false as boolean

  constructor () {
    makeAutoObservable(this)
  }

  setUser (userInput: IUser): void {

    if (userInput.email) { 
      this.isLogeed = true
      this.user = userInput
    }

    this.isLoaded = true
  }

  cleanUser (): void {
    this.isLogeed = false
    this.user = {} as IUser
    this.isLoaded = false
  }

}

export default new AuthStore()