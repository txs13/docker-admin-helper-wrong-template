import { App } from "./classes/AppClass.js";

export const app = new App("", []);

$(function () {
  app.render();
});
