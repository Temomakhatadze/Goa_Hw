const zoo = {
    wolf: true,
    bear: true,
    monkey: true,
    lion: true
    }
    //1
    const {wolf, monkey} = zoo;
console.log(wolf, monkey)




    //2
    const {monkey: gio, lion: saba} = zoo;
console.log(gio, saba)


    //3
    function createObject(temo1, temo2, temo3) {
        return {temo1, temo2, temo3};
    }
console.log(createObject)


    //4
    // gadascems key valius


    //5
    const temo = Object.keys(zoo);

console.log(temo)
