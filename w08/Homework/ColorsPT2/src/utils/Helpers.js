export default {
  getColors: function(data){

    const fetchSettings = {
      method: 'GET',
    };
  return fetch('http://www.colourlovers.com/api/palettes/random?format=json&jsonCallback=callback', fetchSettings).then((response) => {
   return response.json();
 });
  }
};
