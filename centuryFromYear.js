var year = 2021; //exemplo de entrada

function centuryFromYear(year){
    var century = parseInt(year / 100);
    if(year % 100 != 0){
        century += 1;
    }
    return century;
}

function centuryFromYear2(year){
    if(year % 100 == 0){
        century = year / 100;
    } else{
        century = parseInt((year / 100) + 1);
    }
    return century;
}
