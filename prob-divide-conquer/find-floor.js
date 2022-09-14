function findFloor(arr, target) {
    if (arr[0] > target) {
        return -1;
    }
    if (arr[arr.length - 1] < target) {
        return arr[arr.length - 1];
    }
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    let middleIndex;

    for (i of arr) {
        middleIndex = Math.floor((rightIndex + leftIndex) / 2);
        console.log("left", leftIndex, "middle", middleIndex, "right", rightIndex);

        if (arr[middleIndex] <= target && arr[middleIndex + 1] > target) {
            console.log("found target");
            return middleIndex;
        }
        else if (arr[middleIndex] < target) {
            console.log("less than target");
            leftIndex = middleIndex;
        }
        else if (arr[middleIndex] > target) {
            console.log("greater than target");
            rightIndex = middleIndex;
        }

    }
}

module.exports = findFloor