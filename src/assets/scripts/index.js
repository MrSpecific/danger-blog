import { navigator } from "@hotwired/turbo";
// import Turbo from "@hotwired/turbo";
import collectJSON from './utilities/collectJSON';

const build = collectJSON('#build-json');

if (build.env === "development") {
  document.documentElement.addEventListener('turbo:click', (event) => {
    event.preventDefault();
  });
}
// Turbo.visit();
console.log('Hello world', navigator);
