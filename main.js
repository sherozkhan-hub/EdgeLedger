// Initialize and add the map
function initMap(){
  // Your Location
  const loc = { lat: 32.187691, lng: 74.194450};
  // Centered Map on Location
  const map = new google.maps.Map(document.querySelector('.map')
  ,{
    zoom:14,
    center: loc
  });
  // The Marker , positioned at location
  const marker = new google.maps.Marker({position: loc, map:map});
}

// SMOOTH SCROLLING

$('#navbar a, .btn').on('click', function(event){
  if(this.hash !=''){
    event.preventDefault();

    const hash=this.hash;

    $('html, body').animate(
      {
        scrollTop:$(hash).offset().top -100
      },
      800
    );
  }
});