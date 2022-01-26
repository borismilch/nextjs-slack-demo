import React, { useRef } from 'react';
import {observer} from 'mobx-react-lite'

import { MediaStore } from '@/store/.'
import { SendImage } from '.'

import AppIcon, { HiOutlinePlusSm } from '@/components/icons'

const ChatMediaForm = () => {

  const fileRef = useRef<HTMLInputElement>(null)

  const changeFile = () => {
    const file = fileRef?.current?.files[0]

    if (file) MediaStore.addFile(file)
  }

  const triggerInput = () => {
    fileRef?.current?.click()
  }


  return (
    <div className='flex gap-3 justify-start w-full items-center'>

      {
        MediaStore.files.map((file, idx) => (
          <SendImage 
            file={file}
            idx={idx}
          />
        ))
      }

      <input type="file" hidden ref={fileRef} onChange={changeFile} />

      <AppIcon 
        classes='p-2 text-2xl'
        Icon={<HiOutlinePlusSm className="text-2xl text-gray-700" />}

        onClick={triggerInput.bind(null)}
      />

    </div>
  )
};

export default observer(ChatMediaForm);
