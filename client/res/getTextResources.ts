import {
  AppLanguageOptions,
  LocalizedTextResources,
  PropPair,
  TextResources,
  FormsNames,
} from "./textResDatatypes";
// for the purpose of the readability of text resources I decided to split all
// the text labels between files - otherwise it becomes very difficult to find
// a required record
import { appGeneralTextRes } from "./textValues/appGeneralTextRes";
import { loginFormTextRes } from "./textValues/loginFormTextRes";
import { navbarTextRes } from "./textValues/navbarTextRes";
import { registerFormTextRes } from "./textValues/registerFormTextRes";

// some labels / names could be similar on several forms - thus I decided not
// to combine all the file into one, but to call file name to get the names from
// the proper file
const getTextFile = (file: FormsNames): TextResources => {
  switch(file) {
    case FormsNames.APP_GENERAL:
      return appGeneralTextRes;
      break;
    case FormsNames.NAVBAR:
      return navbarTextRes;
      break;
    case FormsNames.LOGIN:
      return loginFormTextRes;
      break;
    case FormsNames.REGISTER:
      return registerFormTextRes;
      break;      
  }
}

const getTextResources = (language: AppLanguageOptions, file: FormsNames) => {
  const textResources: LocalizedTextResources = {};
  const textResourcesMultilang: TextResources = getTextFile(file);
  for (let prop in textResourcesMultilang) {
    const item: PropPair = textResourcesMultilang[prop];
    const languageSettings = AppLanguageOptions[language] as keyof PropPair;
    if (item[languageSettings]) {
      textResources[prop] = item[languageSettings] as string;
    } else {
      textResources[prop] = "...";
    }
  }
  return textResources;
};

export default getTextResources;
