import { App } from "./classes/AppClass.js";
import { startupService } from "./services/startupService.js";
import { AppLanguageOptions } from "./res/textResDatatypes.js";

export const app = new App();

// "loading" fragment is supposed to be rendered as soon as DOM is ready
$(function () {
  app.render();
});

// it is expected that the app is supposed to be rerendered after all the
// app startup conditions are checked
// interval of 5000 is set up temporarily in order to check that
// the "loading" fragment is rendered correctly
startupService()
  .then((res) => {
    setTimeout(() => {
      app.updateGlobalAppState(res);
    }, 5000);
  })
  .catch((err) => {
    app.updateGlobalAppState({
      path: "/error",
      roles: [],
      user: undefined,
      accessToken: undefined,
      refreshToken: undefined,
      isAdmin: false,
      language: AppLanguageOptions.EN,
      error: err}
    );
  });
