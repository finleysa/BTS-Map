(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#limitButton').click(limitItems);
    $('#prev').click(prevPage);
    $('#next').click(nextPage);
  }

  function nextPage(){
     var limitVal = $('#limit').val();
     window.location.href = ('/listings/?lat='+lat+'&lng='+lng+'&limit='+10+'&move=next');
   }

   function prevPage(){
     var limitVal = $('#limit').val();
     window.location.href = ('/listings/?lat='+lat+'&lng='+lng+'&limit='+10+'&move=prev');
   }

   function limitItems(){
     var limitVal = $('#limit').val();
     window.location.href = ('/listings/?lat='+lat+'&lng='+lng+'&10='+limitVal);
   }

})();
