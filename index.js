import { App } from '/src/App.js'

const app = new App();

window.onload = () => {
  app.mount();
}

window.onunload = () => {
  app.unmount();
}
