function findRotationCount(arr) {
    lowest = findLowestIndex(arr);
    return lowest;
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

module.exports = findRotationCount