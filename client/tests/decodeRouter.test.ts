import {
  NavigationInput,
  RouteConst,
  TreeItem,
} from "../router/routerInterfaces";
import { AppLanguageOptions } from "../res/textResDatatypes";
import { decodePath } from "../router/router";

describe("client router decode path tests", () => {
  test("correct login path decoded", () => {
    // the test is going to be implemented here later
    const loginPathEn = "/en/login";
    const loginNavigationStateEn = decodePath(loginPathEn);
    expect(loginNavigationStateEn.appLanguage).toBe(AppLanguageOptions.EN);
    expect(loginNavigationStateEn.firstLevel).toBe(RouteConst.LOGIN);
    expect(loginNavigationStateEn.secondLevel).toBeUndefined();
    expect(loginNavigationStateEn.thirdLevel).toBeUndefined();

    // the test is going to be implemented here later
    const loginPathDe = "/de/login";
    const loginNavigationStateDe = decodePath(loginPathDe);
    expect(loginNavigationStateDe.appLanguage).toBe(AppLanguageOptions.DE);
    expect(loginNavigationStateDe.firstLevel).toBe(RouteConst.LOGIN);
    expect(loginNavigationStateDe.secondLevel).toBeUndefined();
    expect(loginNavigationStateDe.thirdLevel).toBeUndefined();
  });
});
