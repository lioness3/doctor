import { DoctorName } from './business.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).
// If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)

$(document).ready(function(){
  $("#symptomButton").click(function(event){
    event.preventDefault;
    const userSymptom = $('#symptom').val();
    const docName = $('#name').val();

//after click, displays range input and hides symptom input and error message
    $('.input').hide();
    $('#error').hide();
    $('.travel').show();

  $("#rangeButton").click(function(event){
    event.preventDefault;
    let range = parseInt($('#range').val());

//after click, inputs range of 100 miles if nothing is inputted then displays results.
    if (isNaN(range)){
      range = 100;
    }
  console.log(range);
  console.log(userSymptom);
  console.log(docName);
    $('#range').val('');

//API call
    (async () => {
      const doctor = new DoctorName();
      const nameResponse = await doctor.getName(docName, userSymptom,range);

//shows a message telling user to wait while the page is reloaded(7seconds).
      if(error){
          $('#error').show();
    window.setTimeout(function(){location.reload()},9000)
        }
      getPath(nameResponse);
    })();

    function getPath(nameResponse) {
      let displayIt = [];
      let profile = nameResponse.data;

//searches data object for "profile"
      for (var i = 0; i < profile.length; i++) {
        let practices = profile[i].practices;

//searches data object for "practices"
        for (var j = 0; j < practices.length; j++) {
//Displays full name, and callabke telephone link
          displayIt+= `<li><span id ='fullName'>${profile[i].profile.first_name} ${profile[i].profile.last_name}</span></li>`
          displayIt+= `<li><a href="tel:+${practices[j].phones[0].number}"> ${practices[j].phones[0].number}</a><li>`

//only displays clickable website(instead of undefined) if one is listed
          if(practices[j].website!=undefined){
          displayIt+= `<li><a href=${practices[j].website} >${practices[j].website}</a><li>`
          }

//searches for value of patient acceptance
          if ((`${practices[j].accepts_new_patients}`) === true){
            displayIt += '<li>This doctor is currently accepting new patients.</li>'
          }else{
            displayIt +='<li>This doctor is NOT accepting new patients.</li>'
          }

//displays address while avoiding undefined "street2"
          displayIt+= `<li>${practices[j].visit_address.street}</li>`

          if ((practices[j].visit_address.street2)!=undefined){
            displayIt += `<li>${practices[j].visit_address.street2}</li>`
          }

          displayIt += `<li>${practices[j].visit_address.city}, ${practices[j].visit_address.state}</li>`
          displayIt += `<li>${practices[j].visit_address.zip}</li>`
          displayIt += '<br>'
        }
      }
//appends list to the DOM
      $('#error').hide();
      $('#showDoctor').show();
      $('#list').append(displayIt);
    }




  });

  });
});
// If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.
