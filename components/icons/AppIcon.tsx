import React, { ReactElement } from 'react';

interface AppIconProps {
  Icon: ReactElement<any, any>, 
  onClick?: () => void, 
  tooltip?: [string, string], 
  classes?: string, 
  text?: string 
}

const AppIcon: React.FC<AppIconProps> = (props) => {

  const {Icon, onClick, tooltip, classes, text} = props

  return (
    <div
      data-testid="app_icon"
      onClick={onClick && onClick.bind(null)}
      className={"app_icon group " + classes}>

      <div className="flex items-center gap-2 px-1">
        {Icon}

        { text && <p className='text-gray-600 text-sm '>{text}</p>}
      </div>  

      {tooltip && (
        <div data-testid="tooltip" className={"tooltip z-40 " + tooltip[1]}>
          {tooltip[0]}
        </div>
       )}

    </div>
  )
};

export default AppIcon;
