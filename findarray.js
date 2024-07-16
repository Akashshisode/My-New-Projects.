// write one function which will find largest number in given array
// [5,10,2,1,50,30]

function findLargestNumber(arr) {
    if (arr.length === 0) {
        return undefined;
    }
   let largest = arr[0];
   for (let i = 1; i < arr.length; i++) {
       if (arr[i] > largest) {
             largest = arr[i];
       }
   } 
   return largest;

}