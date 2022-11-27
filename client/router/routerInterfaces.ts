import { AppLanguageOptions } from "../res/textResDatatypes.js"

export enum RouteConst {
    "MAIN",
    "ERROR",
    "LOGIN",
    "LOADING",
    "PROFILE",
    "ADMIN_PANEL"
} 

export interface NavigationInput {
  appLanguage: AppLanguageOptions;
  firstLevel: RouteConst;
  secondLevel?: RouteConst | undefined;
  thirdLevel?: RouteConst | undefined;
}

export interface TreeItem {
  navigationSection: RouteConst;
  children?: TreeItem[] | undefined;
}