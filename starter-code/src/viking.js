// Soldier
// TO DO AGAIN

class Soldier {
    constructor(healthArg,strengthArg){

        this.health = healthArg;
        this.strength = strengthArg;

    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health -= damage;
    } 

}

// Viking
class Viking extends Soldier{

    constructor (nameArg,healthArg,strengthArg){

        super(healthArg,strengthArg);
        this.name = nameArg;

    }

    battleCry(){
        return "Odin Owns You All!"
    }

    receiveDamage(damage){
        this.health -= damage
        return (this.health > 0) ? `${this.name} has received ${damage} points of damage`:`${this.name} has died in act of combat`
    }

}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
      super(health, strength);
    }
    receiveDamage(damage) {
      if (damage >= this.health) {
        this.health -= damage;
        return `A Saxon has died in combat`;
      }
      else {
        this.health -= damage;
        return `A Saxon has received ${damage} points of damage`;
      }
    }
   }


// War
class War {

    constructor(){
        //proprieties
        this.vikingArmy = []
        this.saxonArmy = []

    }

    //methods 
    addViking(viking){


        this.vikingArmy.push(viking)
        
    }

    addSaxon(saxon){

        this.saxonArmy.push(saxon);

    }


    vikingAttack() {
        var damage = this.vikingArmy[0].strength; // Math.floor(Math.random()*vikingArmy.length-1))
        var saxon = this.saxonArmy[0];
        if (damage >= saxon.health) {
          this.saxonArmy.shift();
        }
        return saxon.receiveDamage(damage);
      }
                
    

    saxonAttack(){

        var damage = this.saxonArmy[0].strength
        var viking = this.vikingArmy[this.vikingArmy.length-1]
        console.log(viking)
        if (viking.health <= damage){
            this.vikingArmy.pop();
        }
        return viking.receiveDamage(damage)

    }
    showStatus(){

        if (this.saxonArmy.length == 0) return "Vikings have won the war of the century!"
        if (this.vikingArmy.length == 0) return "Saxons have fought for their lives and survive another day...";
        return "Vikings and Saxons are still in the thick of battle."


    }

}





