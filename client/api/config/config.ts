const SERVER_HOST = "http://localhost";
const SERVER_PORT = 1337;
const USER_API = "/api/v1/user";
const ROLE_API = "/api/v1/role";
const ALERT_MESSAGE_TIMEOUT = 5000;

export function getAjaxHeaders(
  token: string | undefined = undefined
): JQueryAjaxSettings {
  if (token) {
    return {
      headers: {
        "Content-Type": "application/json",
      },
    };
  } else {
    return {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
    };
  }
}

export function getConfig() {
  return {
    url: `${SERVER_HOST}:${SERVER_PORT}`,
    userApi: `${USER_API}`,
    roleApi: `${ROLE_API}`,
  };
}
