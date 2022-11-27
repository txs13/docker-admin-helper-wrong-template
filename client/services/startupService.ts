import { getPublicRoles } from "../api/roleApi.js";
import { AppPropertiesInterface } from "../classes/AppClass.js";
import { app } from "../client.js";
import { RoleDocument } from "../interfaces/inputInterfaces.js";
import { compilePath } from "../router/router.js";
import { RouteConst } from "../router/routerInterfaces.js";

export async function startupService(): Promise<AppPropertiesInterface> {
  // fetch public roles for register form and further use
  let roles: RoleDocument[] = [];
  try {
    roles = [...(await getPublicRoles())];

    // get current browser destination url path
    const path = location.pathname;
    // read session data from the local storage
    const session = localStorage.getItem("session");
    // if there is unexpired token, try to login silently
    // TODO: silent login using refresh token
    const user = undefined;
    const accessToken = undefined;
    const refreshToken = undefined;

    // TODO: the logic of this function should be later defined that login page is
    // called only under certain conditions. Now I am calling it always
    // just to test my router
    return {
      path: compilePath({
        appLanguage: app.properties.language,
        firstLevel: RouteConst.LOGIN,
      }),
      user: user,
      roles: roles,
      accessToken: accessToken,
      refreshToken: refreshToken,
      language: app.properties.language,
      isAdmin: false,
      error: undefined,
    };
  } catch (err: any) {
    return {
      path: compilePath({
        appLanguage: app.properties.language,
        firstLevel: RouteConst.ERROR,
      }),
      user: undefined,
      roles: [],
      accessToken: undefined,
      refreshToken: undefined,
      language: app.properties.language,
      isAdmin: false,
      error: err,
    };
  }
}
