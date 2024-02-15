import { UIComponent } from 'ui-library';
import { h } from 'snabbdom';

const handleClick = () => {
  console.log("clicked")
  component.updateState({ count: component.getState().count + 1 });
};

const template = (state: { count: number }): ReturnType<typeof h> => {
  return h('div', [
    h('h1', state.count.toString()),
    h('button', { on:{ click: handleClick } }, 'Add')
  ]);
};

const initialState = { count: 0 };

const component = new UIComponent(template, initialState, '#app');

export default component;