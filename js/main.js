var noms=["Banane","Fraise","Kiwi","Orange","Melon","Tomate","Pomme","Mangue","Viande"];
var prices=[100,120,300,440,110,111,458,458,744];
var images=[1,2,3,4,5,6,7,8,9];
var paniers,produits=[];
var htmlpanier,htmlproduit="";

for (let i = 0; i < noms.length; i++) {
    const nom=noms[i];
    const prix=prices[i];
    const image=images[i];

    var produit={
        nom:nom,
        prix:prix,
        image:image,
        qte:1
    };

     produits.push(produit);

     htmlproduit+=`
     <div class="card mt-3 ms-3" style="width: 18rem;">
     <img src="images/${image}.jpg" class="card-img-top mt-2" alt="..." width="100%"
     height="150px">
     <div class="card-body">
       <h5 class="card-title">${nom}</h5>
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <span class="card-text" style="font-weight: bolder;"> ${prix}.00 DA</span>  
       
       <a href="#" style='margin-left:55px' class="btn btn-success" id="ajoutp"><i class="fas fa-cart-plus"></i></a>
       <a href="#" class="btn btn-outline-danger btn-rounded"><i class="fas fa-heart"></i></a>
     </div>
   </div>`;
    
}

document.getElementById("produits").innerHTML=htmlproduit;

var ajoutp=document.getElementById("ajoutp");
ajoutp.onclick(e=>{
  e.get
});



