import { useState } from 'react'

type returnType = [boolean, (val: boolean) => void, () => void ]

export default (initialVal: boolean): returnType => {

  const [open, setOpen] = useState<boolean>(initialVal)

  const changeOpen: (val: boolean) => void = (val) => {
    setOpen(val)
  }

  const toggleOpen = () => {
    setOpen(prev => !prev)
  }
  
  return [open, changeOpen, toggleOpen]
}
