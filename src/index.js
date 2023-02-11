const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    
    let decodeString = '';    

    decoder:
    for (let i = 0; i < expr.length; i += 10) {

        let newExpr = expr.slice(i, i + 10);
        let codeString = '';
        
        for (let j = 0; j < newExpr.length; j += 2) {
            if (newExpr === '**********') {
                decodeString += ' ';
                continue decoder;
            } else if (newExpr.slice(j, j + 2) === '10') {
                codeString += '.';
            } else if (newExpr.slice(j, j + 2) === '11') {
                codeString += '-';
            } else if (newExpr.slice(j, j + 2) === '00') {
                codeString += '';
            }
            
        }

        decodeString += MORSE_TABLE[codeString];
    }

    return decodeString;
}

module.exports = {
    decode
}


