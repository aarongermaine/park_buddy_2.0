var parksKey = "J6YwwQU5Pdf3XX70BNdRWNHUZoz5neEQnOc5x3LL";

const start = async () => {
  var res = await fetch("https://ipapi.co/json");
  var data = await res.json();
  var stateIP = data.region_code;
  var activitiesArray = [];

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
      // console.log(parks.data);
      // var length = 0;
      for (var i = 0; i < parks.data.length; i++) {
        var card = document.createElement("div");
      //   console.log(parks.data[i].activities);
      //   length = parks.data[i].activities.length;
      //   console.log(length);
      //   if (length > 10) {
      //     length = 10;
      //     console.log(length);
      //   }
      //   for (var x = 0; x < length; x++) {
      //   console.log(parks.data[i].activities[x]);
      //     activitiesArray.push(parks.data[i].activities[x].name);
      //     console.log(activitiesArray);
      //   }
       
      //   for (var i = 0; i < 5; i++) {
      //     if (parks.data[i].activities[i]) {
      //       var parkActivities = parks.data[i].activities[i];
      //       console.log(parkActivities);
      //       activitiesArray.push(parkActivities);
      //     }
      //   }


        card.innerHTML = `

       <div class="col    text-center">
           <div class="col-lg-4">
             <div class="card home-card" style="width: 18rem;">
                <img class= homepage-img src=${parks.data[i].images[0].url} alt="Card image cap" height="200px" width="auto">
                <div class="card-body">
                 <h4>${parks.data[i].fullName}</h4>
                  <p class="card-text">${parks.data[i].description}</p>
                </div>
             
            
             <ul class="list-group list-group-flush">
                <li class="list-group-item">${parks.data[i].entranceFees[0].cost}</li>
                <li class="list-group-item">${parks.data[i].weatherInfo}</li>
             </ul>
             <div class="card-body">
               <button class="add-fav" data-index=${i} data-fullName="${parks.data[i].fullName}" >add fav</button>    
             </div>
            </div>
            </div>
         </div>`;

        document.querySelector("#parks-cards").appendChild(card);

        // activitiesArray.forEach(function (y) {
        //   console.log(activitiesArray);
        //   var list = document.createElement("li");
        //   list.textContent = y;
        //   console.log(list);
        //   var todo = document.querySelector(".act");
        //   console.log(todo);
        //   todo.append(list);
        // });
      }
      document.querySelectorAll(".add-fav").forEach((element) => {
        element.addEventListener("click", function (e) {
          var index = e.target.getAttribute("data-index");
          //add here new post etc
          //faves_id
          //faves_fullName
          var fullName = e.target.getAttribute("data-fullName");
          //faves_description
          console.log(fullName);

          //user_id

          const response = fetch("/api/users/faves", {
            method: "POST",
            body: JSON.stringify({ fullName }),
            headers: { "Content-Type": "application/json" },
          });
          if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace("/homepage");
          } else {
            alert(response.statusText);
          }
        });
      });
    });
};
start();
