import { DoctorName } from './business.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  $("#symptomButton").click(function(event){
    event.preventDefault;
    const userSymptom = $("#symptom").val();
    $("#symptom").val('');
    (async () => {
              let doctor = new DoctorName();
              const nameResponse = await docotor.getName();
              getPath(nameResponse);
            })();
            function getPath(nameResponse) {
            $("#showDoctor").text(`Here is a list of doctors in the Portland area: ${nameResponse.}`)
  })
})
