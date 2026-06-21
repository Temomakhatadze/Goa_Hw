const age = {
    age : 10,
    name :  "jony",
    plusTwo : function() {
        console.log("hello world")
        return 5
    }
}


console.log(age.plusTwo())

const cat = {
    name : "temmo",
    age : 14,
    minusTwo : function(num) {
        console.log("hello world")
        return num + 2
    },
    minusTwo : function(num) {
        if (num % 2 === 0){
            return "number is even"
    }else{
        return "number is odd"
    }

    }    
}
console.log(cat.minusTwo(5))



let lime = {
    passenger : "temo",
    telescope:{
        years: 10,
        model: "Celestron",
        focallends :2034,
        passenger:{
            name: ["temo","nika","SABA"]
        }
    }
}
console.log(lime.telescope.passenger.name[1])



let spaceship ={
    "Fuel type": "Turbo Fuel",
    homeplatnet: "Earth",
};
console.log(spaceship["Fuel type"])
spaceship["Fuel type"] = "avocado oil";
console.log(spaceship["Fuel type"])

let greenEnergy = obj => {
    obj["Fuel type"] = "avocado oil"
}
greenEnergy(spaceship);

let spaceship2 = {
    "Fuel Type": "diesel",
    homeplanet: "mars"
}
console.log(spaceship2["Fuel Type"])


//1
// nested obiects aris roca obiectshi kide erti obieqtia gantavsebuli

//2

const animals = {
    dzayli: {
        name: "tesa",
        age: 5
    },
    kitty: {
        name: "kity",
        age: 1.5
    }
};


console.log(animals.kitty.name); 

console.log(animals.kitty.age); 

const zoo = {
    wolf: true,
    bear: true,
    monkey: true,
    lion: true
};

//3

function changeAnimal(obj, animal) {
    if (obj[animal] === true) {
        obj[animal] = false;
    } else {
        obj[animal] = true;
    }
}
changeAnimal(zoo, "wolf");
console.log(zoo.wolf);  