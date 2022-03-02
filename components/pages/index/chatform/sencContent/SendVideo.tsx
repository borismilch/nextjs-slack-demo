import React from 'react';

import { useUploadData } from 'hooks/.'
import { useEffect } from 'react';
import { SmallLoader } from 'components/loaders'

import { useAppSelector, useAppDispatch } from 'hooks/redux';
import { roomIdSelector } from 'redux/slices/room.selector';
import { MediaSliceActions } from 'redux/actions';

const SendVideo: React.FC<{file: File}> = ({file}) => {

  const roomId = useAppSelector(roomIdSelector)
  const dispatch = useAppDispatch()

  const {getUploadedData, dataUrl, url, loading} = useUploadData('images/' + roomId + "/")

  useEffect(() => {
    getUploadedData(file)
  }, [])

  useEffect(() => {
      if (url) {
        dispatch(MediaSliceActions.addImage(url))
      }
  }, [url]) 

  return (
  
    <div className='
      ml-auto w-[530px] h-[300px] mx-auto group relative rounded-lg drop-shadow overflow-hidden
    '>
      {loading && <div
        data-testid="loader"
        className='some_overlay'
      >
        <SmallLoader />
      </div>}

      <div className='z-0'>
      { dataUrl && 
        <video 
          controls
          src={dataUrl}
          className='h-[300px]' 
        />}
      </div>
      
    </div>
  )
};

export default SendVideo
