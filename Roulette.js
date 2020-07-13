    
 var i =0 ;
    var images=['images/icons8-0-96.png','images/icons8-1-96.png','images/icons8-2-96.png','images/icons8-3-96.png',
    'images/icons8-4-96.png','images/icons8-5-96.png','images/icons8-6-96.png','images/icons8-7-96.png',
    'images/icons8-8-96.png','images/icons8-9-96.png','images/icons8-10-96.png','images/icons8-11-96.png',
    'images/icons8-12-96.png','images/icons8-13-96.png','images/icons8-14-96.png','images/icons8-15-96.png',
    'images/icons8-16-96.png','images/icons8-17-96.png','images/icons8-18-96.png','images/icons8-19-96.png',
    'images/icons8-20-96.png','images/icons8-21-96.png', 'images/icons8-22-96.png','images/icons8-23-96.png',
    'images/icons8-24-96.png','images/icons8-25-96.png','images/icons8-26-96.png','images/icons8-27-96.png',
    'images/icons8-28-96.png','images/icons8-29-96.png','images/icons8-30-96.png','images/icons8-31-96.png',
    'images/icons8-32-96.png','images/icons8-33-96.png','images/icons8-34-96.png','images/icons8-35-96.png',
    'images/icons8-36-96.png'];
    
    function nb_aleatoire()
    
{
    var nombreroulette=Math.random();
    return Math.floor(nombreroulette*36);
}  
  var nombreroulette = nb_aleatoire(nombreroulette) ;
    
  
  function diapo()
{    
    document.images.slide.src=images[i]; 
    var a;
    
    if(i<images.length-1)
    {
        i++;
    }
    else 
    {
        i=0;
    }
    alert(document.images.slide);

   
    a = setTimeout("diapo()",100);
    
       
    if(document.images.slide.src=="https://github.com/KC-AN/Projet-JS/tree/master/images/icons8-" + nombreroulette +"-96.png")
    {  
        clearTimeout(a);
        i=0;
        setTimeout("roulette()",200);
    }
    
   
    
}




function roulette()

{
    var b = document.querySelector("#pmj").value ;
    var c = document.querySelector("#pmo").value ;
    
    var a = document.querySelector(".pari:checked").value;
    var d = document.querySelector("#number").value ;
    if(1*d>1*b)
    {
        d=b;
        alert("Mise supérieure à la valeur du porte monnaie, la mise sera donc maximale !")
    }
    if (a==nombreroulette)
    {
        alert("Vous avez gagné "+35*d+" mille francs !");
        b=1*b+36*d;
        c=1*c-1*d;
        document.querySelector("#pmj").value = b ;
        document.querySelector("#pmo").value = c;
    }
    
    else if ((a=="pair" && nombreroulette%2==0 ) || (a=="impair" && nombreroulette%2==1)) 
    {
        alert("Vous avez gagné "+d+" mille francs !");
        b=1*b+1*d;
        c=1*c-1*d;
        document.querySelector("#pmj").value = b ;
        document.querySelector("#pmo").value = c;
    }
    else
    {
        alert("Mise perdue");
        b=1*b-1*d;
        c=1*c+1*d;
        document.querySelector("#pmj").value = b ;
        document.querySelector("#pmo").value = c;
    }
    
    if(b==0)
        {
            alert("Echec cuisant ! Rafraîchissez la page pour rejouer .");
            document.querySelector("#number").disabled=true;
            document.querySelector("#number").value=0;
            
        }
    nombreroulette=nb_aleatoire(nombreroulette);
    
        
    
}
