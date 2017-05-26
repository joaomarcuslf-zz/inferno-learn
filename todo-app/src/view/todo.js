import Inferno from "inferno";
import Component from "inferno-component";
import { observer } from "inferno-mobx";
import {
  Hero,
  HeroBody,
  HeroHead,
  Columns,
  Column,
  Container,
  Link
} from "../components";

@observer
export default class TodoView extends Component {
  render() {
    const model = this.props.model;

    return (
      <Hero className="is-primary is-fullheight">
        <HeroHead>
          <header class="nav">
            <div class="container">
              <div class="nav-center">
                <h1 class="title is-1">Todo List</h1>
              </div>
            </div>
          </header>
        </HeroHead>

        <HeroBody>

          <Container className="has-text-centered">
            <Columns className="is-mobile">
              <Column>
                <Link onClick={() => model.add()}>New Todo</Link>
              </Column>
              <Column>
                <Link onClick={() => model.load()}>Reload Todos</Link>
              </Column>
              <Column>
                <Link onClick={() => model.save()}>Save Todos</Link>
              </Column>
            </Columns>

            <Container>
              {model.todos.map((todo, i) => (
                <SingleTodoView key={todo.id} model={model} todo={todo} />
              ))}
            </Container>
          </Container>
        </HeroBody>
      </Hero>
    );
  }
}

@observer
export class SingleTodoView extends Component {
  render() {
    const model = this.props.model;
    const todo = this.props.todo;

    return (
      <Container>
        #{todo.id}
        <strong>{todo.text}</strong>
        <i>{todo.done ? "DONE!" : ""}</i>

        <br />

        <div class="field is-grouped is-horizontal has-text-centered">
          <div class="control">
            <label class="checkbox">
              <input
                type="checkbox"
                checked={todo.done}
                onChange={e => (todo.done = e.target.checked)}
              />
            </label>
          </div>

          <div class="control">
            <input
              class="input"
              type="text"
              value={todo.text}
              onChange={e => (todo.text = e.target.value)}
              placeholder="Text input"
            />
          </div>

          <button class="button is-danger" onClick={() => model.remove(todo)}>
            X
          </button>
        </div>
      </Container>
    );
  }
}
