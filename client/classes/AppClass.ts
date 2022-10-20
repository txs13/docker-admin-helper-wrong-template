import { UserDocument, RoleDocument } from "../interfaces/inputInterfaces.js";
import { getTextResources } from "../res/getTextResources.js";
import { AppLanguageOptions, FormsNames } from "../res/textResDatatypes.js";
import { renderLoading } from "./AppClassHelpers/renderLoading.js"

// this class is needed in order to keep the app state in general and
// render proper components depending on it
export class App {
  constructor(
    path: string,
    roles: RoleDocument[],
    user: UserDocument | undefined = undefined,
    accessToken: string | undefined = undefined,
    refreshToken: string | undefined = undefined,
    isAdmin: boolean = false,
    language: AppLanguageOptions = AppLanguageOptions.EN
  ) {
    this.path = path;
    this.roles = [...roles];
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.user = user;
    this.isAdmin = isAdmin;
    this.language = language
  }

  // properties
  path: string;
  user: UserDocument | undefined;
  roles: RoleDocument[] = [];
  accessToken: string | undefined;
  refreshToken: string | undefined;
  isAdmin: boolean;
  language: AppLanguageOptions;

  // public methods

  // this method is supposed to create the whole interface depending
  // on the app state
  render() {
    // app starting up page
    console.log(this.path)
    console.log(this.roles)
    if (this.path === "" && this.roles.length === 0) {
      renderLoading(this.language);
    }
    // no roles, startup service error
    // TODO: forward to error page
    // no user 
    // TODO: forward to login page

    // process path through my router

    // not known destination
    // TODO: forward to wrong destination page
  }
  //this method id supposed to remove all the related items from the DOM
  clear() {
    $("#app").empty();
  }

  updateAppState(
    path?: string,
    user?: UserDocument,
    roles?: RoleDocument[],
    accessToken?: string,
    refreshToken?: string,
    isAdmin?: boolean
  ) {
    if (path) this.path = path;
    if (user) this.user = user;
    if (roles.length > 0) this.roles = [...roles];
    if (accessToken) this.accessToken = accessToken;
    if (refreshToken) this.refreshToken = refreshToken;
    if (isAdmin) this.isAdmin = isAdmin
  }
}
