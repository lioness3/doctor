export class DoctorName{
  async getName() {
    try {
      let pubResponse = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=oregon-portland&user_key=${process.env.API_KEY}`);
      let jsonifiedPubResponse = await pubResponse.json();
      return jsonifiedPubResponse;
    } catch(error) {

    }
  }
}
