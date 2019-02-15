
    var pila = [];
    
    pila.length = 4;
    
  

    exports.addElement = function (element){
          if(pila.length < 5){
            pila.push(element);
            
            if(validarArrayPush(element)){
                return 1;
            }

          } else{
              return 0;
          }
          
          //sss
}
    validarArrayPush = function (element){
    return pila.includes(element) ? true : false;
}

    removeElement = function (element){
    if(validarArrayPush(element)){
        pila.pop();
        return 1;

    }else {
        return 0;
    }
}
    lastElement = function (){
    return pila[pila.length-1];
}
    totElements = function (){
    var totElements = pila.length;
    return totElements;
    
}

