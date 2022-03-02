import React, { useRef } from 'react';
import {observer} from 'mobx-react-lite'
import { SendImage, SendVideo, SendDocument } from '.'

import AppIcon, { HiOutlinePlusSm } from 'components/icons'
import { useAppSelector, useAppDispatch } from 'hooks/redux';
import { MediaSliceActions } from 'redux/actions';
import { mediaSelector } from 'redux/selectors'

const ChatMediaForm = () => {
  const fileRef = useRef<HTMLInputElement>(null)
  const dispatch = useAppDispatch()
  const { isVideo, isDocuments, files } = useAppSelector(mediaSelector)

  const changeFile = () => {
    const file = fileRef?.current?.files[0]
    if (file) dispatch(MediaSliceActions.addFile(file))
  }

  const triggerInput = () => {
    fileRef?.current?.click()
  }

  return (
    <div className={'flex gap-3 w-full items-center ' + 
      (isVideo ? 'justify-center' : "justify-start")
    }>
      {
        isVideo ?  <SendVideo file={files[0]} /> :
        isDocuments ? 
        files.map((file, idx) => (
          <SendDocument key={file.name + idx } file={file} />
        ))
         :
        files.map((file, idx) => (
          <SendImage 
            key={file.name + idx }
            file={file}
            idx={idx}
          />
        )) 
      }

      <input type="file" hidden ref={fileRef} onChange={changeFile} />

     { !isVideo && <AppIcon 
        classes='p-2 text-2xl'
        Icon={<HiOutlinePlusSm className="text-2xl text-gray-700" />}

        onClick={triggerInput.bind(null)}
      />}

    </div>
  )
};

export default observer(ChatMediaForm);
