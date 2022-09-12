function binarySearch(arr, target) {
    let midPoint = -1;
    let minIndex = 0;
    let maxIndex = arr.length - 1
    
    if (target > arr[arr.length - 1] || target < arr[0]) {
        return false;
    }
    
    for (i of arr) {
        // console.log(deminishingArray);

        midPoint = Math.floor((maxIndex + minIndex) / 2);
        console.log("midPoint:", midPoint, "minIndex:", minIndex, "maxIndex:", maxIndex)
        if (deminishingArray[midPoint] === target) {
            return midPoint;
        }
        else {
            if (target < arr[midPoint]) {
                maxIndex = midPoint;

            }
            else {
                minIndex = midPoint;
            }
        }
    }
}