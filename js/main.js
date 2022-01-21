var noms=["Banane","Fraise","Kiwi","Orange","Melon","Tomate","Pomme","Mangue","Viande"];
var prices=[100,120,300,440,110,111,458,458,744];
var images=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg"];
var descriptions=["Some quick example text to build on the card title and make up the bulk of the card's content.","Some quick example text to build on the card title and make up the bulk of the card's content.","Some quick example text to build on the card title and make up the bulk of the card's content.","Some quick example text to build on the card title and make up the bulk of the card's content.","Some quick example text to build on the card title and make up the bulk of the card's content.","Some quick example text to build on the card title and make up the bulk of the card's content.","Some quick example text to build on the card title and make up the bulk of the card's content.","Some quick example text to build on the card title and make up the bulk of the card's content.","Some quick example text to build on the card title and make up the bulk of the card's content."];
var paniers=[];
var produits=[];
var users=[];



var user1= {
  username:"yacine",
  email:"yacine@gmail.com",
  password:"yacine"
};
var user2= {
  username:"fawzi",
  email:"fawzi@gmail.com",
  password:"password2"
};
var user3= {
  username:"sofiane",
  email:"sofiane@gmail.com",
  password:"password3"
};
users.push(user1);
users.push(user2);
users.push(user3);


var htmlpanier = "";

var htmlproduit = "";
document.getElementById("cpt").innerText=0;


for (let i = 0; i < noms.length; i++) {
    const nom=noms[i];
    const prix=prices[i];
    const image=images[i];
    const desc=descriptions[i];
    var produit={
        id:i,
        nom:nom,
        prix:prix,
        image:image,
        description:desc,
        qte:1
    };

     produits.push(produit);

     htmlproduit+=`
     <div class="card mt-3 ms-3 shadow" style="width: 18rem;">
     <img src="images/${image}" class="card-img-top mt-2" alt="..." width="100%"
     height="160px">
     <div class="card-body">
       <h5 class="card-title">${nom}</h5>
       <p class="card-text">${desc}</p>
       <span class="card-text" style="font-weight: bolder;"> ${prix}.00 DA</span>  
       
       <a  style='margin-left:56px' class="btn btn-success" onclick="ajoutP(${i})"><i class="fas fa-cart-plus"></i></a>
       <a  class="btn btn-outline-danger btn-rounded"><i class="fas fa-heart"></i></a>
     </div>
   </div>`;
    
}


document.getElementById("produits").innerHTML=htmlproduit;


function ajoutP(i){
  const found = paniers.find(e=> e.id == i)
  
  if (paniers.includes(produits[i])) {
    console.log("bloc if");
    console.log(found);
    found.qte++; 
      htmlpanier="";
      tablePanier(i);
    
  } else {
    console.log("bloc else");
    produits[i].qte=1;
     paniers.push(produits[i]);
     htmlpanier="";
     tablePanier(i);


// htmlpanier+=`<tr>
// <td>${i}</td>
// <td>${produits[i].nom}</td>
// <td id="qte">${produits[i].qte}</td>
// <td>${produits[i].prix}.00 DA</td>
// <td>
// <button class="btn btn-sm btn-success"><i class="fas fa-check"></i></button>
// <button class="btn btn-sm btn-danger"> <i class="fas fa-times"> </i></button>
// </td>
// </tr> `;

  }
 


// document.getElementById("tableProduits").innerHTML=htmlpanier;
// document.getElementById("cpt").innerText=paniers.length;
}


function tablePanier(i){
  for (let i = 0; i < paniers.length; i++) {
   
     htmlpanier+=`<tr>
<td>${i}</td>
<td>${paniers[i].nom}</td>
<td id="qte">${paniers[i].qte}</td>
<td>${paniers[i].prix}.00 DA</td>
<td>
<button class="btn btn-sm btn-success"><i class="fas fa-check"></i></button>
<button class="btn btn-sm btn-danger" onclick="supp(${i})"> <i class="fas fa-times"> </i></button>
</td>
</tr> `;
  }
  document.getElementById("tableProduits").innerHTML=htmlpanier;
  document.getElementById("cpt").innerText=paniers.length;
}

function supp(i){
paniers.splice(i, 1);
htmlpanier="";
tablePanier(i);
}



// creeProduit(e) {
//   e.preventDefault();
//   console.log("btn click");
//   const nom=document.getElementById("inputNom").value;
//   const prix=document.getElementById("inputPrix").value;
//   const qte=document.getElementById("inputQte").value;
//   const image=document.getElementById("inputImg").value;
//   const desc=document.getElementById("txtDesc").value;
//   const id=produits.length;
//   var path =image.split(`fakepath\\`);
//   const img =path[1];

//   console.log(img);

//   noms.push(nom);
//   prices.push(prix);
//   images.push(img);
//   descriptions.push(desc);
//   console.log(noms);

//   produit={
//     id:id,
//     nom:nom,
//     prix:prix,
//     image:img,
//     description:desc,
//     qte:qte
// };
//   produits.push(produit);

//   htmlproduit+=`
//   <div class="card mt-3 ms-3 shadow" style="width: 18rem;">
//   <img src="images/${img}" class="card-img-top mt-2" alt="..." width="100%"
//   height="150px">
//   <div class="card-body">
//     <h5 class="card-title">${nom}</h5>
//     <p class="card-text">${desc}</p>
//     <span class="card-text" style="font-weight: bolder;"> ${prix}.00 DA</span>  
    
//     <a  style='margin-left:57px' class="btn btn-success" onclick="ajoutP(${id})"><i class="fas fa-cart-plus"></i></a>
//     <a  class="btn btn-outline-danger btn-rounded"><i class="fas fa-heart"></i></a>
//   </div>
// </div>`;
// }

var btncree=document.getElementById("creep");
btncree.onclick=function(e){
  e.preventDefault();
  console.log("btn click");

  
  const nom=document.getElementById("inputNom").value;
  const prix=document.getElementById("inputPrix").value;
  const qte=document.getElementById("inputQte").value;
  const image=document.getElementById("inputImg").value;
  const desc=document.getElementById("txtDesc").value;
  const id=produits.length;
  const check =document.getElementById("gridCheck").checked;
  var path =image.split(`fakepath\\`);
  const img =path[1];
  
   console.log(check);
   if (!check) {
    alert("Veiller cochz le checkbox");
   }
   else if(!nom || !prix || !qte || !image || !desc ){
    alert("Veiller remplir les champs vide");
         
    }
    else{
      console.log(img);

  noms.push(nom);
  prices.push(prix);
  images.push(img);
  descriptions.push(desc);
  console.log(noms);

  produit={
    id:id,
    nom:nom,
    prix:prix,
    image:img,
    description:desc,
    qte:qte
};
  produits.push(produit);

  htmlproduit+=`
  <div class="card mt-3 ms-3 shadow" style="width: 18rem;">
  <img src="images/${img}" class="card-img-top mt-2" alt="..." width="100%"
  height="150px">
  <div class="card-body">
    <h5 class="card-title">${nom}</h5>
    <p class="card-text">${desc}</p>
    <span class="card-text" style="font-weight: bolder;"> ${prix}.00 DA</span>  
    
    <a  style='margin-left:50px' class="btn btn-success" onclick="ajoutP(${id})"><i class="fas fa-cart-plus"></i></a>
    <a  class="btn btn-outline-danger btn-rounded"><i class="fas fa-heart"></i></a>
  </div>
</div>`;
document.getElementById("produits").innerHTML=htmlproduit; 
    }
 

}



  
  document.querySelector("#inputImg").addEventListener("change",function(){
    console.log(this.files);

    const reader =new FileReader();

    reader.addEventListener("load" , ()=>{
      localStorage.setItem("recent-image" , reader.result)
    });

    reader.readAsDataURL(this.files[0]);

  });



   var signup=document.getElementById("signup");
  function cnx(email ,pw){
   console.log("cnx");
  const found= users.find(e=> e.email === email && e.password === pw)
   if (found) {
    //  alert("connecté avec succès");
    window.open("user-profile.html");
   } else {
    alert("email ou mot de passe incorrect");
   }
  }

  signup.onclick=function(e){
    e.preventDefault();
    console.log("onclick");
    var email=document.getElementById("emailInput").value;
    var pw=document.getElementById("passwordlInput").value;
   
    cnx(email ,pw);
    

  }