// problem 1 - feetToMile

function feetToMile(feets){
    if(feets<0) return "Negative Value Cannot be Converted!";
    let miles = feets / 5280;
    return miles;
}


// problem 2 - woodCalculator

function woodCalculator(chairs,tables,beds){
        let woodForChairs = chairs * 1;
        let woodForTables = tables * 3;
        let woodForBeds = beds * 5;
        let totalWood = woodForChairs + woodForTables + woodForBeds;
        return totalWood;
}

// problem 3 - brickCalculator

function brickCalculator(floors){
    let bricks=0;
    for(let i=1;i<=floors;i++)
    {
        if(i<=10) bricks += (1000 * 15);
        else if(i>=11 && i<=20) bricks += (12*1000);
        else bricks += (10*1000);
    }
    return bricks;
}

 
// problem 4 - tinyFriend

function tinyFriend(friendsName){
    if(friendsName.length === 0) return "No Name In the Array";
    let tiny = friendsName[0];
    for(let i = 1; i<friendsName.length ; i++){
        if(tiny.length>friendsName[i].length) {
            tiny = friendsName[i];
        }
    }
    return tiny;
}
