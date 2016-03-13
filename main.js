function Character(options) {
  var options = options || {};
  this.name = options.name || "Master";
  this.kind = options.kind || "undefined";
  this.power = options.power || 100;
  this.mission = options.mission || "help";
  this.help = function (villager){
    villager.givePower(this);
  };

  this.givePower = function (goodMaster){
     var powerPoint = 100;
     goodMaster.power += powerPoint;
    console.log("master's new power points: ", goodMaster.power);
};

  this.damage = function (villager){
var random = Math.floor(Math.random() * 10 +1);
if (random >4) {
  if (this.power < 100){
    console.log("Sorry," + this.name + "you lost your power as a God!");
  }
}
  }


function Creature(options) {
  var options = options || {};
  this.pet = options.pet || "monkey";
  this.training = options.training || "not trained";
  this.helpMaster = options.helpMaster || "no help";
}


function Villager(options){
  var options = options || {};
  this.need = options.need || "hungry";
  this.mood = options.mood || "unhappy";
  this.levelOfLife = options.levelOfLife || "poor";

}


var goodMaster = new Character ({ name: "goodMaster", mission: "help", kind: "good god"});
var master = new Character ({mission: "destroy", kind: "evil god"});
var villager = new Villager({need: "hungry", mood: "unhappy"});
console.log("new characters1:", goodMaster);
console.log("new characters2:", master);
console.log("new characters3:" , villager);
