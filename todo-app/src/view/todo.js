import Inferno from "inferno";
import { observer } from "inferno-mobx";
import {
  Hero,
  HeroBody,
  HeroHead,
  Columns,
  Column,
  Container,
  Link,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td
} from "../components";

const TodoView = observer(({ model }) => (
  <Hero className="is-fullheight">
    <HeroHead>
      <header class="nav">
        <div class="container">
          <div class="nav-center">
            <Container className="has-text-centered">
              <h1 class="title is-1">Todo List</h1>
              <Columns className="is-mobile">
                <Column>
                  <Link onClick={() => model.add()}>New</Link>
                </Column>
                <Column>
                  <Link onClick={() => model.load()}>Reload</Link>
                </Column>
                <Column>
                  <Link onClick={() => model.save()}>Save</Link>
                </Column>
              </Columns>
            </Container>
          </div>
        </div>
      </header>
    </HeroHead>

    <HeroBody>
      <Container className="is-fullheight">
        <Table className="is-striped is-fullwidth">
          <Thead>
            <Tr>
              <Th />
              <Th><h4 class="title is-4">Id</h4></Th>
              <Th><h4 class="title is-4">Task</h4></Th>
              <Th><h4 class="title is-4">Status</h4></Th>
              <Th />
            </Tr>
          </Thead>
          <Tbody>
            {model.todos.map((todo, i) => (
              <SingleTodoView key={todo.id} model={model} todo={todo} />
            ))}
          </Tbody>
        </Table>
      </Container>
    </HeroBody>
  </Hero>
));

const TitleOrField = ({ todo, model }) => {
  if (todo.editing) {
    return (
      <input
        class="input"
        type="text"
        value={todo.text}
        onChange={e => (todo.text = e.target.value)}
        placeholder="Text input"
      />
    );
  }

  return <strong onClick={() => model.edit(todo)}>{todo.text}</strong>;
};

export const SingleTodoView = observer(({ model, todo }) => (
  <Tr>
    <Td>
      <label class="checkbox">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={e => (todo.done = e.target.checked)}
        />
      </label>
    </Td>
    <Td>{todo.id}</Td>
    <Td>
      <TitleOrField todo={todo} model={model} />
    </Td>
    <Td><i>{todo.done ? "DONE" : "TODO"}</i></Td>
    <Td>
      <button class="button is-danger" onClick={() => model.remove(todo)}>
        X
      </button>
    </Td>
  </Tr>
));

export default TodoView;
