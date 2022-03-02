export const fakeEventCreator = (value: string, name: string = 'any') => {
  return { target: { value, name } }
}

const file = new File(["foo"], "foo.txt", {
  type: "text/plain",
});


export const fakeFileEventCreator = () => {
  return { target: { files: [file], value: "value", name: "name" } }
}