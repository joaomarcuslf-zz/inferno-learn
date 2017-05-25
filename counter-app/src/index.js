import './index.css';
import 'bulma/css/bulma.css';
import Inferno from 'inferno';
import { curry } from 'ramda';
import CounterPair from './CounterPair';

const renderer = curry((node, component) => Inferno.render(component, node));
const render = renderer(document.getElementById('app'));

const startApp = (state, view, update) => {
  const dispatch = curry((state, action) => () =>
    main(update(action, state), view));

  const main = (state, view) => render(view(dispatch(state), state));
  main(state, view);
};

startApp(CounterPair.init(0, 0), CounterPair.view, CounterPair.update);
