/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {


let number = 0;

for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    console.log(ch)
    
    switch(ch){
        case'M':
            number += 1000;
            break;
        case'C':
            if(s[i+1] === 'M'){
                number += 900;
                i = i + 1;
                break;
            }else if(s[i+1] === 'D'){
                number += 400;
                i = i + 1;
                break;
            }else{
                    number += 100;
                    break;
            }
        case'D':
            number += 500;
            break;
        case'L':
            number += 50;
            break;
        case'V':
            number += 5;
            break;
        case'X':
            if(s[i+1] === 'C'){
                number += 90;
                i = i + 1;
                break;
            }else if(s[i+1] === 'L'){
                number += 40;
                i = i + 1;
                break;
            }else{
                    number += 10;
                    break;
            }        
        case'I':
            if(s[i+1] === 'X'){
                number += 9;
                i = i + 1;
                break;
            }else if (s[i + 1] === 'V'){
                number += 4;
                i = i + 1;
                break;
            }else{
                    number += 1;
                    break;
                }
    }
    console.log(number)        
}
return number;
};