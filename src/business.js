export class DoctorName{
  async getName(userSymptom,key) {
    try {
      let nameResponse = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${userSymptom}&user_location=45.5051%2C122.6750&skip=0&limit=10&user_key=262c57b8c7d02a5e7fab8baba2a526b`);
      let jsonifiedResponse = await nameResponse.json();
      return jsonifiedResponse;
    } catch(error) {
      console.log("hi");
    }
  }
}
