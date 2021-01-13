import { el, mount } from "redom";

const init = () => {
  const reDomContainer = document.querySelector('#redom-container');

  if (!reDomContainer) return;

  class Hello {
    constructor() {
      this.el = el('h2');
    }
    update(data) {
      this.el.textContent = `Hello from ${data}!`;
    }
  }

  const hello = new Hello();

  hello.update('RE:DOM');
  // const hello = el("h2", "Hello world from Re:DOM!");
  mount(reDomContainer, hello);
}

const reDom = {
  el,
  mount,
  init: init(),
};

export default reDom;