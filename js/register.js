var users=[];
var alerte=document.getElementById("alerte");
var registerForm =document.getElementById("registerForm");
registerForm.addEventListener("submit", validateForm);
function validateForm(e) {
    e.preventDefault()
    console.log("validate form");
    const nom=document.registerForm.nom.value;
    const prenom=document.registerForm.prenom.value;
    const sexe=document.registerForm.sexe.value;
    const date=document.registerForm.date.value;
    const adresse=document.registerForm.adresse.value;
    const tel=document.registerForm.tel.value;
    const username=document.registerForm.username.value;
    const email=document.registerForm.email.value;
    const password = document.registerForm.password.value;
    console.log(nom);
//    if (nom.length==0)
//      alerte.innerHTML=`<div class="alert alert-danger" role="alert">
//      taille du nom trop petite</div>` ;
//    if (password.length<5)
//      alert(`password length should more than 5`)

   var user= {
       username:username,
       email:email,
       password:password
    };
    users.push(user);
   }

