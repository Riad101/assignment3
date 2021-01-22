//https://github.com/Riad101/assignment3

//Problem# 01: kilometer To Meter convertion
function kilometerToMeter(kilometer){
    if(kilometer<0){
        let errorMessage = "Your input can not be Negative. Please provide a valid number to convert meter.";
        return errorMessage;
    }
    let meter = kilometer * 1000;
    return meter;
}

console.log(kilometerToMeter(-5.5));


//Problem# 02: budget calculations
function budgetCalculator(watch, phone, laptop){

    if(watch < 0 || phone < 0 || laptop < 0){
        let errorMessage = "Your input can not be Negative. Please provide a valid number to calculate budget.";
        return errorMessage;
    }
    
    let watchPrice = 50;
    let totalWatchCost = watchPrice * watch;

    let phonePrice = 100;
    let totalPhoneCost = phonePrice * phone;

    let laptopPrice = 500;
    let totalLaptopCost = laptopPrice * laptop;

    let totalBudget = totalWatchCost + totalPhoneCost + totalLaptopCost;


    return totalBudget;

}

console.log(budgetCalculator(1,2,-1));


//Problem# 03:  Calculate hotelCost
function hotelCost(days){
    if(days<0){
        let errorMessage = "Your input can not be Negative. Please provide a valid number to calculate hotel cost.";
        return errorMessage;
    }

    let totalCost = 0;
    let firstTenCost = 100;
    let secondTenCost = 80;
    let lastCost = 50;

    if(days<=10){
        totalCost = days * firstTenCost;
    }
    else if(days<=20){
        let firstTen = 10 * firstTenCost;
        let remainingDays = days - 10;
        let remainingDaysCost = remainingDays * secondTenCost;
        totalCost = firstTen + remainingDaysCost;
    }
    else{
        let firstTen = 10 * firstTenCost;
        let secondTen = 10 * secondTenCost;
        let remainingDays = days - 20;
        let remainingDaysCost = remainingDays * lastCost;
        totalCost = firstTen + secondTen + remainingDaysCost; 
    }
    return totalCost;

}

console.log(hotelCost(-25));


//Problem# 04: find the megaFriend
function megaFriend(friendList){
    let bigFriend = [0];
    for(var i = 0; i < friendList.length; i++){
        
        if(friendList[i].length > bigFriend.length){
            
            bigFriend = friendList[i];
        }
    }
    return bigFriend;
}

let friendList = ['salam', 'kashlam', 'alam', 'salman', 'hashlam', 'abdur rahim' ];

console.log(megaFriend(friendList));