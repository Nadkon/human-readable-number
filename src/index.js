module.exports = function toReadable(number) {
    let strNumber = number.toString();
  let numStr;
  let firstArr = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let secondArr = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let thirdArr = ['null', 'one', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  // if X
 if (strNumber.length == 1) {
    numStr = firstArr[number];
 }
//  if XX
 else if (strNumber.length == 2) {
  //  if 1X
    if (strNumber[0] == 1) {
      numStr = secondArr[strNumber[1]];
    } else if (strNumber[1] == 0) {
      numStr = thirdArr[strNumber[0]];
    }else {
      numStr = `${thirdArr[strNumber[0]]} ${firstArr[strNumber[1]]}`;
    }
 }
//  if XXX
 else {
  //  X0X
   if (strNumber[1] == 0) {
     if (strNumber[2] == 0) {
       numStr = `${firstArr[strNumber[0]]} hundred`;
     } else {
       numStr = `${firstArr[strNumber[0]]} hundred ${firstArr[strNumber[2]]}`;
     }
   }
  //  X1X
   else if (strNumber[1] == 1) {
      numStr = `${firstArr[strNumber[0]]} hundred ${numStr = secondArr[strNumber[2]]}`;
    }else if (strNumber[2] == 0) {
     numStr = `${firstArr[strNumber[0]]} hundred ${thirdArr[strNumber[1]]}`;
   }
    else {
      numStr = `${firstArr[strNumber[0]]} hundred ${thirdArr[strNumber[1]]} ${firstArr[strNumber[2]]}`;
    }
  }

  return numStr;
}
