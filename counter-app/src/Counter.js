import Inferno from 'inferno';

const init = count => count;

const action = {
  Inc: count => count + 1,
  Dec: count => count - 1,
};

const update = (action, model) => action(model);

const view = (update, count) => (
  <div>
    <button onClick={update(action.Inc)}>+</button>
    {count}
    <button onClick={update(action.Dec)}>-</button>
  </div>
);

export default {init, update, view};