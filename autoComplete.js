
function autoComplete(params) {
      
   
    //  console.log(event.currentTarget.value);
        //  var nameCity = event.currentTarget.value;
      fetch(url2, {
          method: 'POST',
          body: JSON.stringify({query: params})
      })
      .then(response => response.json())
      .then((data) => {
          list.innerHTML='';
         // console.log(data.hits);
          data.hits.forEach(ville => { 
  //      console.log(ville.locale_names.default[0]);
  list.insertAdjacentHTML('beforeend', `<option value="${ville.locale_names.default[0]}">`);         
   })
      })
      .catch((err) => {
          console.log(err);
      })
      
      // if (event.keyCode === 13) {
      //     fetchMeteo(city.value);
      // } 
  }    