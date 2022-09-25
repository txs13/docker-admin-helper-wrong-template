import { UserDocument, RoleDocument } from "../interfaces/inputInterfaces.js";
// this class is needed in order to keep the app state in general and
// render proper components depending on it
export class App {
  constructor(
    path: string,
    roles: RoleDocument[],
    user: UserDocument | undefined = undefined,
    accessToken: string | undefined = undefined,
    refreshToken: string | undefined = undefined,
    isAdmin: boolean = false
  ) {
    this.path = path;
    this.roles = [...roles];
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.user = user;
    this.isAdmin = isAdmin;
  }

  // properties
  path: string;
  user: UserDocument | undefined;
  roles: RoleDocument[] = [];
  accessToken: string | undefined;
  refreshToken: string | undefined;
  isAdmin: boolean;

  // public methods

  // this method is supposed to create the whole interface depending
  // on the app state
  render() {
    $("#app")[0].innerHTML = "the app is going to be rendered here somewhen"
  }
  //this method id supposed to remove all the related items from the DOM
  destroy() {}
}
