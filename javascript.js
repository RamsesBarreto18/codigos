// Cree un programa que pida un nivel al usuario y calcule la experiencia que tiene
// del nivel 1 al 10 cada nivel pide 100 exp, 1=100, 2=200, 10=1000
// por cada 10 niveles, un nivel va a aumentar 100exp de lo que pide
// Ejemplo : del nivel 11 al 20 cada nivel pide 200 exp, 11 = 1200, 12=1400, 20=3000
// tener en cuenta que cada nivel tiene acumulada la experiencia de los nivels anteriores

let nivelXP = prompt('Digite su nivel');
nivelXP = parseInt(nivelXP);


var acumXP = 0;
var bonusXP = 100;



function calculoXP(_limite) { 
    
    console.log('Nivel:', nivelXP);

        for (var i = 1; i <= nivelXP; i++) {
           
            if(nivelXP == 0){
            return 0;
        }

            else{

            acumXP = acumXP + bonusXP;

            if(i >= _limite){
                _limite = _limite + 10;
                bonusXP = bonusXP + 100;    
        }   

     }
}   
    return acumXP; 
}
    

    

console.log('Experiencia total :',calculoXP(10));
