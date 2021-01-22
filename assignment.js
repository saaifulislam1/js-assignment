
function KilometerToMeter(km){
    //1km=1000m...
    if(km<0){
        //if negative return -1
        return -1;
    }
    var meter= km*1000;
    return meter;

}
//checking values
var result1=KilometerToMeter(10);
console.log(result1);






//function for calcualting budget

function budgetCalculator(watch_unit,mobile_unit,laptop_unit){
    const watch_price=50;
    const mobile_price=100;
    const laptop_price=500;
    if(watch_unit <0 || mobile_unit<0 || laptop_unit<0){
        return -1;
    }
    else{
        var watch_cost= watch_price*watch_unit;
    var mobile_cost=mobile_price*mobile_unit;
    var laptop_cost=laptop_price*laptop_unit;

    return watch_cost+mobile_cost+laptop_cost;
    }  
}
//checking values
var result2= budgetCalculator(2,2,2);
console.log(result2);





//function for calculating rent 
function hotelCost(days){
    if(days<11){
        return days*100;
    }
    else if(days<21 ){
         var extra_days=days-10;
         var discount= extra_days*80;
         
         return discount+(100*10);;

    }
    else if (days >20){
        var more_days=days-20;
        var first_ten =100*10;
        var second_ten= 80*10;

        return first_ten+second_ten+(more_days*50);
    }
}
//checking the value
var result3=hotelCost(22);
console.log(result3);





//longest name in the array:

function megaFriend (arr){
    var max_length=0;
    var max_name;
    for(var i=0;i<arr.length;i++){
        if(arr[i].length>max_length){
            max_length=arr[i].length;
            max_name = arr[i];
        }
    }
    return max_name;
}

var arr=[ 'saiful islam','saidul','rifat'];
var result4 = megaFriend (arr);
console.log(result4);







