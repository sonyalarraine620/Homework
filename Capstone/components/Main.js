import html from "html-literal";
import * as views from "./views";

export default () => html`
${views["Daily"]()}, ${views["Home"]()}, ${views["Calendar"]()}, ${views["Todo"()]},
`;

//this needs work/ clarification