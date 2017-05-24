import Inferno from 'inferno';
import { compose } from 'ramda';
import Counter from './Counter';

const init = (first, second) => ({
  first: Counter.init(first),
  second: Counter.init(second),
});

const action = {
  Reset: model => init(0, 0),
  First: (action) => model => ({...model, ...{first: Counter.update(action, model.first)}}),
  Second: (action) => model => ({...model, ...{second: Counter.update(action, model.second)}}),
};

const update = (action, model) => action(model);

const forward = (dispatch, action) => compose(dispatch, action);

const view = (dispatch, model) => (
  <div>
    {Counter.view(forward(dispatch, action.First), model.first)}
    {Counter.view(forward(dispatch, action.Second), model.second)}
    <button onClick={dispatch(action.Reset)}>Reset</button>
  </div>
);

export default {init, update, view};