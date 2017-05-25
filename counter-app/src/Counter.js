import Inferno from 'inferno';

const init = count => count;

const action = {
  Inc: count => count + 1,
  Dec: count => count - 1
};

const update = (action, model) => action(model);

export const Button = ({ className, onClick, children }) => (
  <a class={`title ${className}`} onClick={onClick}>
    {children}
  </a>
);

const view = (update, count) => (
  <div class="columns is-mobile has-text-centered">
    <Button className="column" onClick={update(action.Dec)}>-</Button>
    <div class="column title is-2">
      {count}
    </div>
    <Button className="column" onClick={update(action.Inc)}>+</Button>
  </div>
);

export default { init, update, view };
