import React from 'react';
import { IDocument } from '@/models/.'

import { DocTypes } from '@/utils/mock/DocTypes'

import { humanFileSize } from '@/utils/helpers';
import AppIcon from '@/components/icons/AppIcon';
import { GrCloudDownload } from 'react-icons/gr';

const DocumentMessage: React.FC<{document: IDocument}> = ({document}) => {

  const FileImage = DocTypes[document.type]

  return (
    <div className='flex items-center gap-2 p-2 px-1 '>

     <div className='p-2 border rounded-full border-gray-500'>
       <FileImage className='text-2xl' />
     </div>

      <a href={document.url + '.docs'} download={document.name} className='hover:underline cursor-pointer text-gray-700' target={'_blank'}>{document.name}</a>

      <p className='text-sm font-semibold hover:underline cursor-pointer'>{humanFileSize(document.size)}</p>

      <a download={document.name} target="_blank" href={document.url}>
        <AppIcon 
          Icon={<GrCloudDownload className='text-2xl text-gray-500' />}
          classes='p-2'

        />
      </a>
    </div>
  )
};

export default DocumentMessage;
