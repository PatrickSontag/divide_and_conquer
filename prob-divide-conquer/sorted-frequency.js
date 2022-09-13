function sortedFrequency(arr, target) {
    // sortedFrequency([1,1,2,2,2,2,3],2) // 4
    let targetLeftIndex = findTargetLeft(arr, target);
    let targetRightIndex = findTargetRight(arr, target);
    return countTarget(targetRightIndex, targetLeftIndex);

}

function updateMiddleIndex(left, right) {
    return Math.floor((left + right) / 2);
}

function findTargetLeft(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length -1;
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    for (i of arr) {
        middleIndex = updateMiddleIndex(leftIndex, rightIndex);
        console.log("L: leftIndex", leftIndex, "middleIndex", middleIndex, "rightIndex", rightIndex);
        if (arr[middleIndex] === target && arr[middleIndex - 1] !== target) {
            console.log("LEFT:", middleIndex);
            return middleIndex;
        }
        else if (arr[middleIndex] < target) {
            leftIndex = middleIndex;
        }
        else {
            rightIndex = middleIndex;
        }
    }
}

function findTargetRight(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length -1;
    let middleIndex = updateMiddleIndex(leftIndex, rightIndex);


    for (i of arr) {
        middleIndex = updateMiddleIndex(leftIndex, rightIndex);
        console.log("R: leftIndex", leftIndex, "middleIndex", middleIndex, "rightIndex", rightIndex);

        if (arr[middleIndex] === target && arr[middleIndex + 1] !== target) {
            console.log("RIGHT:", middleIndex);
            return middleIndex;
        }
        else if (arr[middleIndex] > target) {
            rightIndex = middleIndex;
        }
        else {
            leftIndex = middleIndex;
        }
    }
}

function countTarget(right, left) {
    return right - left + 1;
}

module.exports = sortedFrequency