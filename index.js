const findPalindrome = (str) => {
    const arr = str.split('');
    const newStr = arr.reverse().join('');

    if(str === newStr) {
        console.log(true)
    } else {
        console.log(false)
    }
}

const maxChar = (str) => {
    let obj = {};

    for(let char of str)
        (!obj[char]) ? obj[char] = 1 : obj[char]++;
}

const reverseInteger = (num) => {
    if(num < 0){
        return -1 * parseInt(num.toString().split('').reverse().join(''))
    } else {
       return +num.toString().split('').reverse().join('')
    }
}


const fizzBuzz = (arr) => {
    const l = arr.length

    for(let i = 0; i < l; i++){
        if((arr[i] % 3 === 0) && (arr[i] % 5 === 0)){
            console.log("fizzbuzz")
        } else if (arr[i] % 5 === 0) {
            console.log("buzz")
        } else if (arr[i] % 3 === 0){
            console.log("fizz")
        } else {
            console.log(arr[i])
        }
    }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

console.log(fizzBuzz(array))
