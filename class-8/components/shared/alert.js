export default class Alert {
  constructor(response) {
    this.render(response);
  }

  render(response) {
    let alertELem = document.getElementById("alert");

    let alert = response.success
      ? `
    <div class="alert alert-success" role="alert">
    Success!
  </div>
    `
      : `
    
      <div class="alert alert-danger" role="alert">
        Login failed. Try again.
      </div>
    `;

    alertELem.innerHTML += alert;
    
    setTimeout(() => {
      alertELem.innerHTML = "";
    }, 1500);
  }
}
