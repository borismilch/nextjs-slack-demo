import User from './types'
import useUploadDataReult from "./hooks/IuseUploadDataReult";
import uerInputValueArr from './hooks/IsuerInputValueArr'
import UserInput from "./userInterfaces/IUserInput";
import SidebarItem from './utils/ISidebarItem'
import ChannelItem from './utils/ISidebarItem'
import Message from './chat/Imessage'

export interface IuseUploadDataReult extends useUploadDataReult {}
export interface IuserInputValueArr extends uerInputValueArr {}
export interface IUserInput extends UserInput {}
export interface ISidebarItem extends SidebarItem {}
export interface IChannelItem extends ChannelItem {}
export interface IMessage extends Message {}
export interface IUser extends User {}