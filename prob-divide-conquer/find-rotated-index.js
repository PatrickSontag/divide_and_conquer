function findRotatedIndex(arr, target) {
    let lowest = findLowestIndex(arr);
    let targetIndex = findTargetIndex(arr, target, lowest);
    return targetIndex;
}

function findLowestIndex(arr) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    let middleIndex;
    let lowestValueIndex;

    for (i of arr) {
        middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (arr[middleIndex] > arr[middleIndex + 1]) {
            // console.log("left", leftIndex, "middle", middleIndex, "right", rightIndex);
            lowestValueIndex = middleIndex + 1;
            return lowestValueIndex;
        }
        if (arr[middleIndex] > arr[leftIndex]) {
            console.log("middleIndex is higher");
            // console.log("left", leftIndex, "middle", middleIndex, "right", rightIndex);
            arr[leftIndex] = arr[middleIndex];
        }
        else if (arr[middleIndex] < arr[leftIndex]) {
            console.log("middleIndex is lower");
            // console.log("left", leftIndex, "middle", middleIndex, "right", rightIndex);
            arr[rightIndex] = arr[middleIndex];
        }
    }
}

function findTargetIndex(arr, target, lowestIndex) {
    let middleIndex;
    let leftIndex;
    let rightIndex;

    if (target < arr[0]) {
        leftIndex = lowestIndex;
        rightIndex = arr.length - 1;
    }
    else {
        leftIndex = 0;
        rightIndex = lowestIndex - 1;
    }
    for (i of arr) {
        middleIndex = Math.floor((leftIndex + rightIndex) / 2);

        if (arr[middleIndex] === target) {
            return middleIndex;
        }
        if (arr[middleIndex] < target) {
            leftIndex = middleIndex;
        }
        if (arr[middleIndex] > target) {
            rightIndex = middleIndex;
        }
    }


}

module.exports = findRotatedIndex