var parksKey = 'J6YwwQU5Pdf3XX70BNdRWNHUZoz5neEQnOc5x3LL';

const start = async () => {
  var res = await fetch('https://ipapi.co/json');
  var data = await res.json();
  var stateIP = data.region_code;

  console.log(stateIP);

  var apiKey = `https://developer.nps.gov/api/v1/parks?stateCode=${stateIP}&api_key=${parksKey}`;
  console.log(apiKey);
  var data;
  fetch(apiKey)
    .then(function (response) {
      return response.json();
    })
    .then(function (parks) {
      data = parks.data;
      console.log(data);
      for (var i = 0; i < parks.data.length; i++) {
        var card = document.createElement('div');
        card.innerHTML = `

<div class="col text-center">
  <div class="col-lg-4">
    <div class="card home-card" style="width: 18rem;">
        <img class= homepage-img src=${parks.data[i].images[0].url} alt="Card image cap" height="200px" width="auto">
        <div class="card-body">
            <h4>${parks.data[i].fullName}</h4>
            <p class="card-text">${parks.data[i].description}</p>
        </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">PARK FEE: ${parks.data[i].entranceFees[0].cost}</li>
                <li class="list-group-item">TYPE OF PARK: ${parks.data[i].designation} </li>
                <li class="list-group-item"></li>
            </ul>
        <div class="card-body">
            
     <button class="add-fav" data-index=${i} data-fullName="${parks.data[i].fullName}" data-description="${parks.data[i].description}" data-park-id="${parks.data[i].id}" >add fav</button>    </div>
  </div>
</div>

                `;
        document.querySelector('#parks-cards').appendChild(card);
      }
      const newFormHandler = async (event) => {
        event.preventDefault();

      var index = event.target.getAttribute('data-index');
    
      //add here new post etc
      //faves_id
      var park_id_code = event.target.getAttribute('data-park-id')
      console.log(park_id_code);

      //faves_fullName
      var fullName = event.target.getAttribute('data-fullName');
      
      
      //faves_description
      var description = event.target.getAttribute('data-description');

      //user_id

      const response = await fetch(`/api/faves`, {
        method: 'POST',
        body: JSON.stringify({ fullName, description, park_id_code, }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response)
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/');
      } else {
        alert(response);
      }
    };
      document.querySelectorAll('.add-fav').forEach((element) => {
        // element.addEventListener('click', function (e) {
          element.addEventListener('click', newFormHandler);
          
      // });
    });
});
}
start();
