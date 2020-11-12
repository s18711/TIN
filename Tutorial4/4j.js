const binarySearch =  (arr, xToBeFound, left, right) => {

    arr.sort((a, b) => { return a - b});

    if (left > right)
        return false;
1
    let mid = Math.floor((left + right)/2);

    if (arr[mid]===xToBeFound) return `index of ${xToBeFound} : ${mid}`;

    if(arr[mid] > xToBeFound)
        return binarySearch(arr, xToBeFound, left, mid-1);
    else
        return binarySearch(arr, xToBeFound, mid+1, right);
}

console.log(binarySearch([1,2,3,4,5,6,7,9,10],8, 0, 9));
