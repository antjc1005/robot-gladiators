var playerName = window.prompt("What is your robot's name?");
var playerHealth= 75;
var playerAttack= 10;
var playerMoney= 10;


var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function(enemyName){
   //repeat and execute as long as enemy-robot is still alive
   while(enemyHealth > 0 && playerHealth > 0) {
    //window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP to choose.");
    console.log(promptFight);

    if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm player wants to skip
    var confirmSkip = window.confirm(" Are you sure you'd like to quit?");
    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
    }
  
 }
//Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value of 'enemyHealth'
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining." 
    );
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died! ");
        playerMoney = playerMoney + 20;
        break;
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."    
    );
    //players health check
    if (playerHealth <= 0) {
        window.alert(playerName + " has died! ");
        break;
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    } 
    
};

for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        //let player know what round they are in
        window.alert("Welcome to Robot Gladiators! ROUND " + (i + 1));
    //pick new enemy to fight based on index of enemyNames array
    var pickedEnemyName = enemyNames[i];
    //reset enemy health before starting new fight
    enemyHealth = 50;
    //use debugger
    //debugger;

    //pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
    }
    else {
        window.alert(" You have lost your robot in battle! Game Over!!!");
    }
}       


