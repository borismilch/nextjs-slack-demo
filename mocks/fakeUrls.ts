import { ILink } from 'models'

const fakeLinks: ILink[] = [
  {
    href: "https://somesite.com/posts",
    id: "some id",
    name: "some name"
  },

  {
    href: "https://somenewsite.com/posts",
    id: "some new id",
    name: "some new name"
  },
]

export default fakeLinks

export const [fakeLink] = fakeLinks