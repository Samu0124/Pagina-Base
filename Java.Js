window.onload = init;
    function init(){
        document.querySelector(".emergente").style.display="block";
        document.querySelector(".emergente1").style.display="none";
        document.querySelector(".emergente2").style.display="none";
        document.querySelector(".emergente3").style.display="none";
        document.querySelector(".emergente4").style.display="none";
        document.querySelector(".musica").style.display="none";
        document.querySelector(".musica1").style.display="none";
        document.querySelector(".musica2").style.display="none";
                document.querySelector(".musicaa").style.display="none";
        document.querySelector(".musica1a").style.display="none";
        document.querySelector(".musica2a").style.display="none";
                document.querySelector(".musicab").style.display="none";
        document.querySelector(".musica1b").style.display="none";
        document.querySelector(".musica2b").style.display="none";
                document.querySelector(".musicac").style.display="none";
        document.querySelector(".musica1c").style.display="none";
        document.querySelector(".musica2c").style.display="none";
                document.querySelector(".musicad").style.display="none";
        document.querySelector(".musica1d").style.display="none";
        document.querySelector(".musica2d").style.display="none";
        document.querySelector(".emergente .menor").addEventListener("click",adios);
        document.querySelector(".emergente .menor1").addEventListener("click",adios1);
        document.querySelector(".emergente .menor2").addEventListener("click",adios2);
        document.querySelector(".emergente .menor3").addEventListener("click",adios3);
    }
        
    function adios(){
    			bye = document.getElementById("hola");
    			bye1 = document.getElementById("cad");
    			bye2 = document.getElementById("cad1");
    			bye3 = document.getElementById("cad2");
    	        bye4 = document.getElementById("cad3");
               		bye.className="copia";
               		bye1.className="copiab";
               		bye2.className="copiab1";
               		bye3.className="copiab2";
               		bye4.className="copiab3";
               		setTimeout(fin,1900);
	                document.querySelector(".emergente1").style.display="block";
}    
    function adios1(){
    			bye = document.getElementById("hola");
    			bye1 = document.getElementById("cad");
    			bye2 = document.getElementById("cad1");
    			bye3 = document.getElementById("cad2");
    	        bye4 = document.getElementById("cad3");
               		bye.className="copia";
               		bye1.className="copiab";
               		bye2.className="copiab1";
               		bye3.className="copiab2";
               		bye4.className="copiab3";
               		setTimeout(fin,1900);
	                document.querySelector(".emergente2").style.display="block";
}  
    function adios2(){
    			bye = document.getElementById("hola");
    			bye1 = document.getElementById("cad");
    			bye2 = document.getElementById("cad1");
    			bye3 = document.getElementById("cad2");
    	        bye4 = document.getElementById("cad3");
               		bye.className="copia";
               		bye1.className="copiab";
               		bye2.className="copiab1";
               		bye3.className="copiab2";
               		bye4.className="copiab3";
               		setTimeout(fin,1900);
	                document.querySelector(".emergente3").style.display="block";
}   
      function adios3(){
    			bye = document.getElementById("hola");
    			bye1 = document.getElementById("cad");
    		    bye2 = document.getElementById("cad1");
    			bye3 = document.getElementById("cad2");
    	        bye4 = document.getElementById("cad3");
               		bye.className="copia";
               		bye1.className="copiab";
               		bye2.className="copiab1";
               		bye3.className="copiab2";
               		bye4.className="copiab3";
               		setTimeout(fin,1900);
	                document.querySelector(".emergente4").style.display="block";
}  
function fin() {
              	bye = document.getElementById("hola"); 
              	bye.className="fuera";
}
    function fin1() {
              	bye = document.getElementById("hola"); 
              	bye.className="quedar";
              	    		        document.querySelector(".emergente1").style.display="none";
              	    		                document.querySelector(".emergente2").style.display="none";
              	    		                        document.querySelector(".emergente3").style.display="none";
              	    		                                document.querySelector(".emergente4").style.display="none";
}    
    function denuevo(){
    			bye = document.getElementById("hola");
    			bye1 = document.getElementById("cad");
    			bye2 = document.getElementById("cad1");
    			bye3 = document.getElementById("cad2");
    	        bye4 = document.getElementById("cad3");
               		bye.className="copiar";
               		bye1.className="copiabr";
               		bye2.className="copiab1";
               		bye3.className="copiab2";
               		bye4.className="copiab3";
               		setTimeout(fin1,1900);

	            
}    

  function play(){
               document.querySelector(".nomusic").style.display="block";
                      document.querySelector(".music").style.display="none";
                                 document.querySelector(".nomusic1").style.display="block";
                      document.querySelector(".music1").style.display="none";
                                 document.querySelector(".nomusic2").style.display="block";
                      document.querySelector(".music2").style.display="none";
                                 document.querySelector(".nomusic3").style.display="block";
                      document.querySelector(".music3").style.display="none";
                                 document.querySelector(".nomusic4").style.display="block";
                      document.querySelector(".music4").style.display="none";
        document.querySelector(".musica").style.display="block";
        document.querySelector(".musica1").style.display="block";
        document.querySelector(".musica2").style.display="block";
                 document.querySelector(".musicaa").style.display="block";
        document.querySelector(".musica1a").style.display="block";
        document.querySelector(".musica2a").style.display="block";
                document.querySelector(".musicab").style.display="block";
        document.querySelector(".musica1b").style.display="block";
        document.querySelector(".musica2b").style.display="block";
                document.querySelector(".musicac").style.display="block";
        document.querySelector(".musica1c").style.display="block";
        document.querySelector(".musica2c").style.display="block";
                document.querySelector(".musicad").style.display="block";
        document.querySelector(".musica1d").style.display="block";
        document.querySelector(".musica2d").style.display="block";
}
  function play1(){
        document.getElementById("home2").pause();

document.getElementById("home").play();
        document.querySelector(".musica").style.display="none";
                document.querySelector(".musica1").style.display="none";
                           document.querySelector(".musica2").style.display="none";
                                    document.querySelector(".musicaa").style.display="none";
        document.querySelector(".musica1a").style.display="none";
        document.querySelector(".musica2a").style.display="none";
                document.querySelector(".musicab").style.display="none";
        document.querySelector(".musica1b").style.display="none";
        document.querySelector(".musica2b").style.display="none";
                document.querySelector(".musicac").style.display="none";
        document.querySelector(".musica1c").style.display="none";
        document.querySelector(".musica2c").style.display="none";
                document.querySelector(".musicad").style.display="none";
        document.querySelector(".musica1d").style.display="none";
        document.querySelector(".musica2d").style.display="none";
  }
  function play2(){
        document.getElementById("home").pause();

document.getElementById("home1").play();
        document.querySelector(".musica").style.display="none";
                document.querySelector(".musica1").style.display="none";
                                      document.querySelector(".musica2").style.display="none";
                                               document.querySelector(".musicaa").style.display="none";
        document.querySelector(".musica1a").style.display="none";
        document.querySelector(".musica2a").style.display="none";
                document.querySelector(".musicab").style.display="none";
        document.querySelector(".musica1b").style.display="none";
        document.querySelector(".musica2b").style.display="none";
                document.querySelector(".musicac").style.display="none";
        document.querySelector(".musica1c").style.display="none";
        document.querySelector(".musica2c").style.display="none";
                document.querySelector(".musicad").style.display="none";
        document.querySelector(".musica1d").style.display="none";
        document.querySelector(".musica2d").style.display="none";
  }
          function play3(){
        document.getElementById("home1").pause();

document.getElementById("home2").play();
document.querySelector(".musica").style.display="none";
                document.querySelector(".musica1").style.display="none";
                                      document.querySelector(".musica2").style.display="none";
                                               document.querySelector(".musicaa").style.display="none";
        document.querySelector(".musica1a").style.display="none";
        document.querySelector(".musica2a").style.display="none";
                document.querySelector(".musicab").style.display="none";
        document.querySelector(".musica1b").style.display="none";
        document.querySelector(".musica2b").style.display="none";
                document.querySelector(".musicac").style.display="none";
        document.querySelector(".musica1c").style.display="none";
        document.querySelector(".musica2c").style.display="none";
                document.querySelector(".musicad").style.display="none";
        document.querySelector(".musica1d").style.display="none";
        document.querySelector(".musica2d").style.display="none";
    }

                    function pause(){
                                 document.querySelector(".music").style.display="block";
                      document.querySelector(".nomusic").style.display="none";
                                                       document.querySelector(".music1").style.display="block";
                      document.querySelector(".nomusic1").style.display="none";
                                 document.querySelector(".music2").style.display="block";
                      document.querySelector(".nomusic2").style.display="none";
                                 document.querySelector(".music3").style.display="block";
                      document.querySelector(".nomusic3").style.display="none";
                                 document.querySelector(".music4").style.display="block";
                      document.querySelector(".nomusic4").style.display="none";
                              document.getElementById("home").pause();
        document.getElementById("home1").pause();
document.getElementById("home2").pause();
document.querySelector(".musica").style.display="none";
                document.querySelector(".musica1").style.display="none";
                                      document.querySelector(".musica2").style.display="none";
                                               document.querySelector(".musicaa").style.display="none";
        document.querySelector(".musica1a").style.display="none";
        document.querySelector(".musica2a").style.display="none";
                document.querySelector(".musicab").style.display="none";
        document.querySelector(".musica1b").style.display="none";
        document.querySelector(".musica2b").style.display="none";
                document.querySelector(".musicac").style.display="none";
        document.querySelector(".musica1c").style.display="none";
        document.querySelector(".musica2c").style.display="none";
                document.querySelector(".musicad").style.display="none";
        document.querySelector(".musica1d").style.display="none";
        document.querySelector(".musica2d").style.display="none";
    }

    function iratrabajo1(){
      window.location.href = "https://samu0124.github.io/PaginaExcel/";
    }
        function iratrabajo2(){
      window.location.href = "https://samu0124.github.io/CalculadoraConMemoria/";
    }
     function iraparcial1(){
      window.location.href = "https://drive.google.com/file/d/19dJzX-wEmlSVAgcMHnN32Hy6_ldag1BT/view?usp=sharing";
    }