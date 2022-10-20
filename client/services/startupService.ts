import { getPublicRoles } from "../api/roleApi.js";
import { app } from "../client.js";

export async function startupService() {
  // fetch public roles for register form and further use
  const roles = await getPublicRoles();
  // get current browser destination url path
  const path = window.location.pathname;
  // read session data from the local storage
  const session = localStorage.getItem("session");
  // if there is unexpired token, try to login silently
  // TODO: silent login using refresh token
  const user = undefined
  const accessToken = undefined
  const refreshToken = undefined
  // update app state - temporarily it is organized through the delay
  // in order to check how loading page is rendered
  setTimeout(() => {
    app.updateAppState(path, user, roles, accessToken, refreshToken, false );
    app.render();
  }, 10000)
}
