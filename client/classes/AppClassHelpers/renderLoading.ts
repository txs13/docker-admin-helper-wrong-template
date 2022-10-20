import { getTextResources } from "../../res/getTextResources.js";
import { AppLanguageOptions, FormsNames } from "../../res/textResDatatypes.js";

export function renderLoading(language: AppLanguageOptions) {
  $("#app").append("<div id='frame'></div>");
  $("#frame").css({
    width: "100%",
    height: "100%",
    display: "grid",
    gridTemplateColumns: "auto",
    gridTemplateRows: "auto",
    alignItems: "center",
    justifyItems: "center",
  });
  $("#frame").append(
    `<h1 id='loading-page-header'>${
      getTextResources(language, FormsNames.LOADING).loadingMsgText
    }</h1>`
  );
  $("#loading-page-header").css({
    textAlign: "center",
  });
}
