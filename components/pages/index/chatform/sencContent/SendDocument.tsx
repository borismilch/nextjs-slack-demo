import React, { useEffect } from 'react';
import { useUploadData } from 'hooks/.'

import { DocExts, DocTypes } from 'utils/mocks/DocTypes'
import { GrDocument } from 'react-icons/gr'
import { SmallLoader } from 'components/loaders'

import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { roomIdSelector } from 'redux/selectors';
import { MediaSliceActions } from 'redux/actions'

const SendDocument: React.FC<{file: File}> = ({file}) => {

  const FileIcon = DocTypes[file.type] || GrDocument
  const extention = DocExts[file.type]

  const roomId = useAppSelector(roomIdSelector)
  const dispatch = useAppDispatch()

  const {getUploadedData, url, loading} = useUploadData('images/' + roomId + "/", extention)

  useEffect(() => {
    getUploadedData(file)
  }, [])

  useEffect(() => {
    if (url) {
      const doc = {
        name: file.name,
        size: file.size,
        type: file.type,
        url  
      }
  
      dispatch(MediaSliceActions.addDocument(doc))
    }
  }, [url])

  return (

    <div className='flex gap-2 items-center px-1 flex-shrink-0 relative rounded-md overflow-hidden pr-2'>

      {loading && 
      <div data-testid="overlay" className='inset-0 absolute bg-opacity-50 bg-gray-400 flex justify-end items-start' />}

      <div className='file_icon_wrapper'>
        <FileIcon className={'text-2xl'} />  
      </div>

      <div className='flex '>

        <h2 className='text-lg font-medium'>{file.name}</h2>

       { loading && <div data-testid="loader" className='ml-2'>
          <SmallLoader size={6} color='text-blue-600' />
        </div>}
        
      </div>

    </div>

  )
};

export default SendDocument
