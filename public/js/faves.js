// query selectors for where in HTML to plug in database items

// route to faves should do the GET function to display here

// double check working back to "Homepage" button (currently lives on faves.handlebars)



const parkData = async () => {
  const response = await fetch('/api/faves', {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
});
console.log(response);
}

parkData();
console.log(parkData);