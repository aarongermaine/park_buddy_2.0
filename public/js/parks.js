var findParkBtn = document.querySelector("#startFindLocalPark");
findParkBtn.addEventListener("click", function () {
  document.querySelector(".show").style.display = "block";
});
// 
// Displaying every info category
function statePark(Statedata) {
  var emptyStates = [];
  console.log(Statedata);
  for (var i = 0; i < Statedata.data.length; i++) {
    var nameNames = Statedata.data[i].fullName;
    emptyStates.push(nameNames);
  }
  emptyStates.forEach(function (a, index) {
    var listParks = document.createElement("li");
    listParks.textContent = a;
    listParks.setAttribute("data-idx", index);
    var seeNames = document.getElementById("park-list");
    seeNames.append(listParks);
    listParks.addEventListener("click", function (e) {
      var index = e.target.getAttribute("data-idx");
      console.log(index);
      var parkInfo = Statedata.data[index].description;
      var seeInfo = document.getElementById("park-info");
      seeInfo.textContent = "";
      seeInfo.append(parkInfo);
      var seeWeather = Statedata.data[index].weatherInfo;
      var postWeather = document.getElementById("park-weather-info");
      postWeather.textContent = "";
      postWeather.append(seeWeather);
      var seeParkName = Statedata.data[index].name;
      var postParkName = document.getElementById("park-name");
      postParkName.textContent = "";
      postParkName.append(seeParkName);
      var seeParkFee = Statedata.data[index].entranceFees[0].cost;
      var postParkFee = document.getElementById("park-fee");
      postParkFee.textContent = "";
      postParkFee.append(seeParkFee);
      var seeParkFeeInfo = Statedata.data[index].entranceFees[0].description;
      var postParkFeeInfo = document.getElementById("park-fee-info");
      postParkFeeInfo.textContent = "";
      postParkFeeInfo.append(seeParkFeeInfo);
      var seeImg = Statedata.data[index].images[0].url;
      var postImg = (document.getElementById("park-image").src = seeImg);
      // Setting Local Storage
      localStorage.setItem(index, parkInfo);
      var lock = index;
      localStorage.setItem("lastKey", lock);
      localStorage.setItem(lastKey, seeWeather);
      localStorage.setItem("savedKey", lastKey);
      localStorage.setItem(savedKey, seeParkName);
      localStorage.setItem("latestKey", savedKey);
      localStorage.setItem(latestKey, seeParkFee);
      localStorage.setItem("priceKey", latestKey);
      localStorage.setItem(priceKey, seeParkFeeInfo);
      localStorage.setItem("feeKey", priceKey);
      //
      var activitiesArray = [];
      var sdidx = Statedata.data[index];
      var totalActivities =
        Statedata.data[index].activities && Statedata.data[index].activities;
      var numberActivities =
        sdidx.activities && sdidx.activities.length < 20
          ? sdidx.activities.length
          : 20;
      for (var i = 0; i < numberActivities; i++) {
        var parkActivities = Statedata.data[index].activities[i].name;
        activitiesArray.push(parkActivities);
      }
      activitiesArray.forEach(function (x) {
        var list = document.createElement("li");
        list.textContent = x;
        var parks = document.getElementById("park-activities");
        parks.append(list);
      });
    });
  });
  return;
}