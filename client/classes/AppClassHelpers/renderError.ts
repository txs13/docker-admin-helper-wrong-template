import { getTextResources } from "../../res/getTextResources.js";
import { AppLanguageOptions, FormsNames } from "../../res/textResDatatypes.js";

export function renderError(language: AppLanguageOptions, error?: string) {
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

  $("#frame").append("<div id='content'></div>");
  $("#content").css({
    display: "flex",
    flexDirection: "column",
  });
  $("#content").append(
    `<h1 id='error-page-header'>${
      getTextResources(language, FormsNames.ERROR).errorHeaderText
    }</h1>`
  );
  $("#error-page-header").css({
    textAlign: "center",
  });

  $("#content").append(
    `<p id='error-description'>${
      error
        ? getTextResources(language, FormsNames.ERROR).errorDetailsText + error
        : getTextResources(language, FormsNames.ERROR).errorDetailsText +
          getTextResources(language, FormsNames.ERROR).unknownErrorMsg
    }</p>`
  );
  $("#error-description").css({
    textAlign: "center",
  });
}
