// const isValid = function(s) {
//     let stack = [];
    
//     for (let index = 0; index < s.length; index++) {
//         const currentChar = s[index];

//         if (currentChar === '(' || currentChar === '{' || currentChar === '[') {
//             stack.push(currentChar);
//         } else {
//             if (
//                 (currentChar === ')' && stack[stack.length - 1] === '(') ||
//                 (currentChar === '}' && stack[stack.length - 1] === '{') ||
//                 (currentChar === ']' && stack[stack.length - 1] === '[')
//             ) {
//                 stack.pop();
//             } else {
//                 return false;
//             }
//         }
//     }

//     return stack.length === 0;
// };


const isValid = function(s) {
    let stack = [];
    let obj = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    for (index = 0; index < s.length; index++) {
        let currentChar = s[index];

        if (obj[currentChar]) {
            stack.push(obj[currentChar]);
        } else if (stack.pop() !== currentChar) {
            return false;
        }
    }

    return stack.length === 0;
};