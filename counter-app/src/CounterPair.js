import Inferno from 'inferno';
import { compose } from 'ramda';
import Counter, { Button } from './Counter';

const init = (first, second) => ({
  first: Counter.init(first),
  second: Counter.init(second)
});

const action = {
  Reset: () => init(0, 0),
  First: action => model => ({
    ...model,
    ...{ first: Counter.update(action, model.first) }
  }),
  Second: action => model => ({
    ...model,
    ...{ second: Counter.update(action, model.second) }
  })
};

const update = (action, model) => action(model);

const forward = (dispatch, action) => compose(dispatch, action);

const view = (dispatch, model) => (
  <section class="hero is-primary is-fullheight">
    <div class="hero-head">
      <header class="nav">
        <div class="container">
          <div class="nav-center">
            <h1 class="title is-1">Count App</h1>
          </div>
        </div>
      </header>
    </div>

    <div class="hero-body">
      <div class="container is-fullwidth has-text-centered">
        {Counter.view(forward(dispatch, action.First), model.first)}
        {Counter.view(forward(dispatch, action.Second), model.second)}
        <Button onClick={dispatch(action.Reset)}>Reset</Button>
      </div>
    </div>
  </section>
);

export default { init, update, view };
