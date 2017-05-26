import Inferno, { render } from "inferno";
import "bulma/css/bulma.css";

import TodoView from "./view/todo";
import TodoViewModel from "./viewModel/todo";

// create a viewModel singleton
const model = new TodoViewModel();

// render the editor
render(<TodoView model={model} />, document.getElementById("app"));
