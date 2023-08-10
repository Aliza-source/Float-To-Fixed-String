
function floatToFixedString(number, decimalPlaces) {
    if( typeof number !== 'number' || typeof decimalPlaces !== 'number'){
        throw new Error("Invalid input: both parameters must be numbers");
    }

    decimalPlaces = ~~(decimalPlaces < 0 ? 0 : decimalPlaces);

    let parts = ('' + number).split('.');
    let integer = 0;
    let decimal = 1;

    if(!parts[decimal]){
        parts[decimal] = '';
    }

    if(decimalPlaces === 0){
       return parts[integer];
    }

    if(parts[decimal].length >= decimalPlaces){
        return parts[integer] + '.' + parts[decimal].substring(0, decimalPlaces);
    }
    
    else {
        return parts[integer] +  '.' + parts[decimal].padEnd(decimalPlaces, '0');
    }
}