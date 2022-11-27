import { compilePath } from "../router/router";
import {
  NavigationInput,
  RouteConst,
  TreeItem,
} from "../router/routerInterfaces";
import { AppLanguageOptions } from "../res/textResDatatypes";

describe("client router compile path tests", () => {
  test("first router level path compilation check", () => {
    // here I simply iterate very simple "first level" routes

    // login path option is going to be tested in all languages, other paths are not
    const loginPathInputEn: NavigationInput = {
      appLanguage: AppLanguageOptions.EN,
      firstLevel: RouteConst.LOGIN,
    };
    const loginPathStringEn: String = compilePath(loginPathInputEn);
    expect(loginPathStringEn).not.toBeNaN();
    expect(loginPathStringEn).toBe("/en/login");

    // login path option is going to be tested in all languages, other paths are not
    const loginPathInputDe: NavigationInput = {
      appLanguage: AppLanguageOptions.DE,
      firstLevel: RouteConst.LOGIN,
    };
    const loginPathStringDe: String = compilePath(loginPathInputDe);
    expect(loginPathStringDe).not.toBeNaN();
    expect(loginPathStringDe).toBe("/de/login");
  });
});
