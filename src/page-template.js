//iterate through data and push to array
const generateTeam = (team) => {
  const html = []
  for (let i = 0; i < team.length; i++) {
    switch (team[i].getRole()) {
      case "Manager":
        html.push(managerHTML(team[i]));
        break;
      case "Intern":
        html.push(internHTML(team[i]));
        break;
      case "Engineer":
        html.push(engineerHTML(team[i]));
        break;
    }
  }
  console.log(team)
  const dataCards = html.join('');
};

// join the cases together


//return back to index.js
// const teamPage = generateNewPage(dataCards);
// return teamPage;

const managerHTML = (managerData) => {
  return `
  <div class="col-3 p-4 pt-5">
      <div class="card">
        <div class="card-header text-white bg-primary">
          <h3>${managerData.name}</h3>
          <h4>Manager</h4><i class="fas fa-user"></i>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${managerData.id}</li>
          <li class="list-group-item">Email: ${managerData.email}</li>
          <li class="list-group-item">Office number: ${managerData.officeNumber}</li>
        </ul>
      </div>
    </div>`;
};

const internHTML = (internData) => {
  return `
  <div class="col-3 p-4 pt-5">
      <div class="card">
        <div class="card-header text-white bg-primary">
          <h3>${internData.name}</h3>
          <h4>Intern</h4><i class="fas fa-user-graduate"></i>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${internData.id}</li>
        <li class="list-group-item">Email: ${internData.email}</li>
        <li class="list-group-item">School: ${internData.school}</li>
        </ul>
      </div>
    </div>`;
}

const engineerHTML = (engineerData) => {
  return `
  <div class="col-3 p-4 pt-5">
  <div class="card">
    <div class="card-header text-white bg-primary">
      <h3>${engineerData.name}</h3>
      <h4>Engineer</h4><i class="fas fa-wrench"></i>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineerData.id}</li>
      <li class="list-group-item">Email: ${engineerData.email}</li>
      <li class="list-group-item">Github: ${engineerData.github}</li>
    </ul>
  </div>
</div>`;
}

//make the HTML page
const generateNewPage = function (data) {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Who is your Team?</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>

<body>
  <header>
    <h1 class="text-center pt-4 bg-danger bg-gradient text-light">My Team</h1>
  </header>
  <main class="col-12 justify-content-center d-flex">
  ${generateTeam(data)}
  </main>
</body>`;
};

module.exports = generateTeam;
