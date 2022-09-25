export default class Home{
  constructor(){
    this.render();
  }

  render(){
    let appElem = document.getElementById('app');

    appElem.innerHTML = `
    <h1 class="text-center">Home page</h1>
    `
  }
}