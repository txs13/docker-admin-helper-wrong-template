import { App } from "./classes/AppClass.js";
import { startupService } from "./services/startupService.js";

export const app = new App("", []);

startupService()
  .then((res) => {

  })
  .catch((err) => {
    
  });


$(function () {
  app.render();
});
