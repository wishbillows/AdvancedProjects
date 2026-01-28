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