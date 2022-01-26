import React, { ReactElement } from 'react';

const AppIcon: React.FC<{Icon: ReactElement<any, any>, onClick?: () => void, tooltip?: [string, string], classes?: string, text?: string }> = ({Icon, onClick, tooltip, classes, text}) => {
  return (
    <div
      onClick={onClick && onClick.bind(null)}
      className={"p-2 rounded-full active:scale-90 group inline-block relative cursor-pointer hover:bg-gray-200 transition-all duration-200 text-gray-600 " + classes}>

      <div className="flex items-center gap-2 px-1">

        {Icon}

        { text && <p className='text-gray-600 text-sm '>{text}</p>}
      
      </div>  

     { tooltip && <div className={"tooltip z-40 " + tooltip[1]}>

        {tooltip[0]}

      </div>}

    </div>
  )
};

export default AppIcon;
