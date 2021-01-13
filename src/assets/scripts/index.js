import { navigator } from "@hotwired/turbo";
// import Turbo from "@hotwired/turbo";
import collectJSON from './utilities/collectJSON';
import reDom from './components/reDom';

const build = collectJSON('#build-json');

// Prevent Turbolinks in dev mode
if (build.env === "development") {
  document.documentElement.addEventListener('turbo:click', (event) => {
    event.preventDefault();
  });
}
// Turbo.visit();
console.log('Hello world', build.env, navigator, reDom);
