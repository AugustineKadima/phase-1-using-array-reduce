const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
function totalBatteries(){
    let total = 0
    for(let battery of batteryBatches){
        total += battery
    }

    return total
}
