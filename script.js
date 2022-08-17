function isNumeric(num){
  return !isNaN(num)
}

function rango(palabra){
    for(let i=0; i<palabra.length; i++){
      if(palabra.codePointAt(i)>=97 && palabra.codePointAt(i)<=122){
        return true;
      }else{
        return false;
      }
    }
}

function esVocal(palabra){
    for(let i=0;i<palabra.length;i++){
      switch(palabra.charAt(i)){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          return true;
        default:
          return false;
       }
    }
  }  
 
 function encriptar(palabra){
  let resultado="";
  for(let i=0; i<palabra.length;i++){
      if( (esVocal(palabra.charAt(i)) == false) && (!(isNumeric(palabra.charAt(i)))) && (rango(palabra.charAt(i))==true)){
        resultado += palabra.charAt(i);
      }else{
        switch(palabra.charAt(i)){
          case'a':
            resultado += "ai";
            break;
          case'e':
            resultado += "enter";
            break;
          case'i':
            resultado += "imes";
            break;
          case'o':
            resultado += "ober";
            break;
          case'u':
            resultado += "ufat"
            break;
       }
    }
  }
  return resultado;   
 }
 
 function desencriptar(palabra){
  let resultado="";
  for(let i=0; i<palabra.length;i++){
    if(esVocal(palabra.charAt(i)) == false && (!(isNumeric(palabra.charAt(i))))){
       resultado += palabra.charAt(i);
    }else{
       switch(palabra.charAt(i)){
        case'a':
          resultado += "a";
          i+=1;
          break;
        case'e':
          resultado += "e";
          i+=4;
          break;
        case'i':
          resultado += "i";
          i+=3;
          break;
        case'o':
          resultado += "o";
          i+=3;
          break;
        case'u':
          resultado += "u"
          i+=3;
          break;
       }
    }
  }
  return resultado;   
 }

 function copiar(){
    let copiado = document.getElementById('resultado').value;
    document.getElementById('textoAEncriptar').value = copiado;
    console.log(copiado);
  }
 

let valorEncriptado="";
 function mostrarEncriptado(){
    const valorAEncriptar = (document.getElementById('textoAEncriptar').value).toLowerCase();
    valorEncriptado = encriptar(valorAEncriptar);
    document.getElementById('resultado').value = valorEncriptado;
    document.getElementById('textoAEncriptar').value="";
    document.getElementById('rectangulo').style.display ="none";
    document.getElementById('resultado').style.display = "inline";
    document.getElementById('copiar').style.display = "inline";
 }

 let buttonEncriptar = document.getElementById('encriptar');
 buttonEncriptar.onclick = mostrarEncriptado;
 
 
 function mostrarDesencriptar(){
    const valorAEncriptar = (document.getElementById('textoAEncriptar').value).toLowerCase();
    valorEncriptado = desencriptar(valorAEncriptar);
    document.getElementById('resultado').value = valorEncriptado;
    document.getElementById('textoAEncriptar').value="";
    document.getElementById('rectangulo').style.display ="none";
    document.getElementById('resultado').style.display = "inline";
    document.getElementById('copiar').style.display = "inline";
 }
 
 let buttonDesencriptar = document.getElementById('desencriptar');
 buttonDesencriptar.onclick = mostrarDesencriptar;

 let buttonCopiar = document.getElementById('copiar');
 buttonCopiar.onclick = copiar;
 