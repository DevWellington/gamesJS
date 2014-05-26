var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying){
    
    if (youHit = 1){
        
        console.log("Parabens ! Você matou o dragão");
        totalDamage += damageThisRound;
        if (totalDamage >= 4){
            
            console.log("O jogador matou o dragão");
            slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 2);    
        }   
        
    } else if (youHit = 0){
        console.log("O dragão o derrotou");
    }
    
    
    slaying = false;
}
