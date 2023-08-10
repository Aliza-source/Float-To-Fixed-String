# floatToFixedString Function
Converts a floating-point number to a string with fixed number of decimal places while preserving the trailing zeros.

## Example
```Javascript
const example1 = floatToFixedString(1, 2)       // returns "1.00"
const example2 = floatToFixedString(1.5, 2)     // returns "1.50"
const example3 = floatToFixedString(1.5555, 2)  // returns "1.55"
console.log(example1, example2, example3)
```
## Syntax  
`function floatToFixedString` (  
  &emsp;&emsp;**[In] Number** number,  
  &emsp;&emsp;**[In] Number** decimalPlaces  
);

## Parameters
`[In] number`  

Type:&ensp;**Number**  

The floating-point number to convert to a fixed-point string.


`[In] decimalPlaces`  

Type:&ensp;**Number**  

The desired number of decimal places in the fixed-point string.

## Return value

Type:&ensp;**String**  

The converted fixed-point string representation of the input number.