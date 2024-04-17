var selfDividingNumbers = function(left, right) {
    function isSelfDividing(num) {
     const digits = num.toString().split('');
     console.log(digits)
     for (let digit of digits) {
         if (num % parseInt(digit) !== 0 || digit === '0') {
             return false;
         }
     }
     return true;
 }
    const result = [];
     for (let i = left; i <= right; i++) {
         if (isSelfDividing(i)) {
             result.push(i);
         }
     }
     return result;
 };