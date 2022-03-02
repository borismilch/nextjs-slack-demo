import React from 'react';

import AppIcon, {HiLink, HiOutlinePlusSm} from 'components/icons'
import { LinksService, WindowService } from 'services';

import { useAppSelector } from 'hooks/redux';
import { roomIdSelector } from 'redux/slices/room.selector';
import { ILink } from 'models'

interface ChatLinksHeaderProps {
  urls: ILink[]
}

const ChatsLinksHeader: React.FC<ChatLinksHeaderProps> = ({urls}) => {
  const roomId = useAppSelector(roomIdSelector)
  
  const addLink = async  () => {
    await LinksService.addLink(roomId)
  }

  const carryWindowService = (url: string) => {
    return () => WindowService.goOutside(url)
  }

  return (
    <div className='text-sm text-gray-600 p-1 shadow-md'>

      <AppIcon 
        onClick={addLink.bind(null)}
        Icon={<HiOutlinePlusSm className='text-xl text-gray-500'/>}
        classes={'rounded-md active:scale-90'}
      />

      {
        urls?.map(doc => (
          <AppIcon 
            key={doc.id}
            Icon={<HiLink className='text-xl text-gray-500'/>}
            classes={'rounded-md active:scale-90'}
            text={doc.name}
            onClick={carryWindowService(doc.href)}
            tooltip={[doc.href, 'tooltip-bottom']}
          />
        ))
      } 
    </div>
  )
};

export default ChatsLinksHeader
