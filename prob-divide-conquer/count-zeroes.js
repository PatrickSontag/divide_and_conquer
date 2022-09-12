function countZeroes(arr) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    let middleIndex = -1;

    if (arr[0] === 0) {
        return arr.length;
    }
    if (arr[arr.length - 1] === 1) {
        return 0;
    }

    for (i of arr) {
        middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        console.log("left", leftIndex, "middle", middleIndex, "right", rightIndex);
        if (arr[middleIndex] === 0 && arr[middleIndex - 1] === 1) {
            return arr.length - middleIndex;
        }
        if (arr[middleIndex] === 1 && arr[middleIndex + 1] === 0) {
            return arr.length - middleIndex - 1;

        }
        if (arr[middleIndex] === 1) {
            console.log("middle is 1")
            leftIndex = middleIndex + 1;
        }
        else {
            console.log("middle is 0")
            rightIndex = middleIndex -1;
        }
    }
}

module.exports = countZeroes