function validate() {
    var Emailaddress = document.getElementById('form2Example1').value;
    var password = document.getElementById('form2Example2 ').value;
    var errorMessage = document.getElementById('error-message');

    // Perform your validation here
    if (Emailaddress === 'your_email' && password === 'your_password') {
      errorMessage.innerHTML = ''; // Clear any previous error messages
      alert('Sign-in successful!');
    } else {
      errorMessage.innerHTML = 'Invalid username or password';

    }
  }
    function sendemail(e){
e.preventDefault();

Email.send({
  Host : "smtp.elasticemail.com",
  Emailaddress : "alyaasobhy10@gamail.com ",
  Password : " B039A707A6FFEB98DF45906B0C72DF4F7997",
  To : 'alyaasobhy10@gamail.com ',
  From : document.getElementById("form2Example1 ").value,
  Subject :document.getElementById(" form2Example2").value,
  Body :document.getElementById("form2Example34").value,
}).then(
message => alert(message)
);
return true;}


    