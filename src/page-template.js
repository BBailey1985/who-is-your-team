const managerHTML = managerData => {
  return `
  <div class="card" style="width: 18rem;">
    <div class="card-header text-white bg-primary">
      <h3>${managerData.name}</h3>
      <h4>Manager</h4><i class="icon-user"></i> icon-user
    </div>

    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${managerData.id}</li>
        <li class="list-group-item">Email: ${managerData.email}</li>
        <li class="list-group-item">Office number: ${managerData.officeNumber}</li>
      </ul>
    </div>
  </div>`
}

//to push array to page
generatePage = (data) => {
  newArray = [];

  for (var i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();
  }
}





// module.exports = (templateData) => {
//   const 
// }