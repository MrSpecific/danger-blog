import Turbo from "@hotwired/turbo";
import collectJSON from './utilities/collectJSON';

const build = collectJSON('#build-json');

if (build.env === "development") {
  document.documentElement.addEventListener('turbo:click', (event) => {
    // console.log(build, event.cancelable);
    event.preventDefault();
  });
}
// Turbo.visit();
console.log('Hello world', Turbo);
