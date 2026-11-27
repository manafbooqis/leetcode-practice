/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let string = '' ;

    for (let i = 0; i < strs[0].length; i++) {
        let ch = strs[0][i];

        if (ch === undefined) break;

        if (strs.length === 1){
           string += strs;
           return string;
        }

        let count = 0;

        for(let j = 1 ; j < strs.length ; j++  ){
            let ch2 = strs[j][i]
            if (ch2 === undefined) return string;
            
            if ( ch2 !== ch  ){               
                continue;            
            }

            count += 1;

            if(count  === strs.length - 1 ){
                string += ch;
            }         
        }
        if (count < strs.length - 1)break;                             
    }
    return string;

};