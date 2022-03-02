import { ChangeEvent } from "react"

export type useInputValueArr = [
  string, 
  {
    value: string, 
    onChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)
  }, 
  () => void, (val: string) => void
]

