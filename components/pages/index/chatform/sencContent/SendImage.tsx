import React from 'react';
import { useUploadData } from 'hooks/.'
import { useEffect } from 'react';

import { SmallLoader } from 'components/loaders'
import { IoMdClose } from 'components/icons'

import { useAppSelector, useAppDispatch } from 'hooks/redux'
import { roomIdSelector } from 'redux/selectors'
import { MediaSliceActions } from 'redux/actions'

interface SendMessageProps {
  file: File, 
  idx: number
}

const SendImage: React.FC<SendMessageProps> = (props) => {
  const {file, idx} = props

  const dispatch = useAppDispatch()
  const roomId = useAppSelector(roomIdSelector)

  const {getUploadedData, dataUrl, url, loading} = useUploadData('images/' + roomId + "/")

  useEffect(() => {
    getUploadedData(file)
  }, [])

  useEffect(() => {
    if (url) {
      dispatch(MediaSliceActions.addImage(url))
    }
  }, [url]) 
  
  const removeImage = () => {
    dispatch(MediaSliceActions.removeImage(idx))
  }

  return (

    <div className='w-[100px] h-[100px] group relative rounded-lg drop-shadow overflow-hidden '>

      {loading && 
        <div data-testid="loader" className='inset-0 z-10 absolute bg-black bg-opacity-40 flex items-center h-full justify-center'>
        <SmallLoader  size={6} />
       
      </div>}

      {!loading && 
       <div data-testid="delete_button" className='image_overlay '>

        <button 
          onClick={removeImage.bind(null)}
          className='round_button'>

          <IoMdClose 
            className="text-xl font-medium"
          />
        </button>

      </div>}

      <div className='z-0'>
        {dataUrl && <img 
          src={dataUrl}
          className='w-full h-[100px] object-cover'
         
        />}
      </div>
    </div>
  )
};

export default SendImage
