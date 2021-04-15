// query selectors for where in HTML to plug in database items


// route to faves should do the GET function to display here

// double check working back to "Homepage" button (currently lives on faves.handlebars)

const faveinfo = async (event) => {
    const totalName = document.querySelector('<h1');

  const response = await fetch('/api/faves', {
      method: 'GET',
      body: JSON.stringify
  })  
}