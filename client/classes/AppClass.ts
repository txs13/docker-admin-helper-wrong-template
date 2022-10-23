import { UserDocument, RoleDocument } from "../interfaces/inputInterfaces.js";
import { getTextResources } from "../res/getTextResources.js";
import { AppLanguageOptions, FormsNames } from "../res/textResDatatypes.js";
import { renderLoading } from "./AppClassHelpers/renderLoading.js";
import { renderError } from "./AppClassHelpers/renderError.js"
import { renderLoginRegister } from "./AppClassHelpers/renderLoginRegister.js"

export interface AppPropertiesInterface {
  path: string;
  roles: RoleDocument[];
  user: UserDocument | undefined;
  accessToken: string | undefined;
  refreshToken: string | undefined;
  isAdmin: boolean;
  language: AppLanguageOptions;
  error: string | undefined;
}

const appStartupValues: AppPropertiesInterface = {
  path: "",
  roles: [],
  user: undefined,
  accessToken: undefined,
  refreshToken: undefined,
  isAdmin: false,
  language: AppLanguageOptions.EN,
  error: undefined,
};

// this class is needed in order to keep the app state in general and
// render proper components depending on it
export class App {
  constructor() {
    this.properties = appStartupValues;
  }

  // properties
  properties: AppPropertiesInterface;

  // public methods

  // this method is supposed to create the whole interface depending
  // on the app state
  render() {
    // app starting up page
    console.log(this.properties.path);
    console.log(this.properties.roles);
    if (this.properties.path === "" && !this.properties.error) {
      renderLoading(this.properties.language);
    }
    // no roles
    // TODO: forward to login page, register page is blocked
    // no user
    // TODO: forward to login page, register page is NOT blocked
    if (this.properties.path === "/login" && this.properties.user === undefined) {
      // consider silent logoff if user consciously calls login page
      renderLoginRegister(this.properties.language);
    }


    // process path through my router
    // TODO: router function call, router function to be settled
    // not known destination
    // TODO: forward to wrong destination page
    // error page redirect
    if (this.properties.error && this.properties.path === "/error") {
      renderError(this.properties.language, this.properties.error)
    }
  }
  //this method id supposed to remove all the related items from the DOM
  clear() {
    $("#app").empty();
  }

  updateGlobalAppState(values: AppPropertiesInterface) {
    this.properties = values;
    // TODO: this is wrong usage of the function - to be fixed later
    window.history.pushState(
      { page: this.properties.path },
      this.properties.path,
      this.properties.path
    );
    this.clear()
    this.render()
  }
}
