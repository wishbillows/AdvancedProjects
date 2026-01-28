export type LayoutType = "vertical" | "classic" | "transverse" | "columns";

export type AssemblySizeType = "large" | "default" | "small";

export type LanguageType = "zh" | "en" | null;


export interface TabsMenuProps{
	icon:String;
	  title: string;
  path: string;
  name: string;
  close: boolean;
  isKeepAlive: boolean;
}

export interface TabsState{
	tabsMenuList:TabsMenuProps[]
}

export interface AuthState {
  routeName: string;
  authButtonList: {
    [key: string]: string[];
  };
  authMenuList: Menu.MenuOptions[];
}