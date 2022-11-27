import { NavigationInput, RouteConst, TreeItem } from "./routerInterfaces.js";
import { AppLanguageOptions } from "../res/textResDatatypes.js";

// current app setup is based on the following path strategy:
// path format: / 'language' / 'main frame' / 'sub frame' / ' sub-sub frame' ... / ' parameters'
// language and primary frame are obligatory, all the others are optional
// the app is going to have a lot of navigation and I decided to have two functions:
// 1. to decode path string and fulfil respected navigation
// 2. to form the path using some input in order to create 100% correct navigation path

// this var is supposed to contain allowed navigation option in order to avoid wrong rendering
const appTree: TreeItem[] = [
  {
    navigationSection: RouteConst.MAIN
  },
  {
    navigationSection: RouteConst.ERROR
  },
  {
    navigationSection: RouteConst.ADMIN_PANEL
  },
  {
    navigationSection: RouteConst.PROFILE
  },
  {
    navigationSection: RouteConst.LOGIN
  },
  {
    navigationSection: RouteConst.LOADING
  },
];

interface Enum {
  [id: number]: string;
}

function getEnumString(enumValues: Enum, value: any): string {
  for (let item in enumValues)
    if (enumValues[item] === value) return item.toLowerCase();
  throw new Error("wrong enum item call");
}

// this is the function to create navigation path
export function compilePath(navigationInput: NavigationInput): string {
  // so far I have only first level of navigation frames so I
  // implemented this just to make the whole concept running
  let path =
    "/" +
    getEnumString(AppLanguageOptions, navigationInput.appLanguage) +
    "/" +
    getEnumString(RouteConst, navigationInput.firstLevel);
  return path;
}

// this is the function to decode the navigation path into clear navigation instructions
export function decodePath(path: string): NavigationInput {
  let pathLocal: string = "";
  if (path[0] === "/") pathLocal = path.substring(1);
  else pathLocal = path;
  const items: string[] = pathLocal.split("/");

  // here proper items array should be iterated later on
  // the option that not valid path is entered is not processed
  // currently this all is implemented "quick and dirty"
  let languageEnumItem = AppLanguageOptions[items[0].toUpperCase()];
  let firstLevelEnumItem = RouteConst[items[1].toUpperCase()];

  return {
    appLanguage: languageEnumItem,
    firstLevel: firstLevelEnumItem,
  };
}
