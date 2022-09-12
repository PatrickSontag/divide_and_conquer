function sortedFrequency(arr, target) {
    // sortedFrequency([1,1,2,2,2,2,3],2) // 4
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    let middleIndex;
    let targetLeftIndex;
    let targetRightIndex;

    function updateMiddleIndex() {
        middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    }

    for (i of arr) {

        if (targetLeftIndex && targetRightIndex) {
            return `ANSWER: ${targetRightIndex - targetLeftIndex + 1} instances of ${target}`;
        }

        updateMiddleIndex();
        console.log("left", leftIndex, "middle", middleIndex, "right", rightIndex);

        if (!targetLeftIndex && (arr[middleIndex] === target && arr[middleIndex - 1] !== target)) {
            console.log("arr[middleIndex]", arr[middleIndex], "arr[middleIndex - 1]", arr[middleIndex - 1])
            targetLeftIndex = middleIndex;
            leftIndex = middleIndex;
            rightIndex = arr.length - 1;
            console.log("FOUND targetLeftIndex", targetLeftIndex);
        }
        if (!targetRightIndex && (arr[middleIndex] === target && arr[middleIndex + 1] !== target)) {
            console.log("arr[middleIndex", arr[middleIndex], "arr[middleIndex - 1", arr[middleIndex - 1])
            targetRightIndex = middleIndex;
            rightIndex = middleIndex;
            leftIndex = 0;
            console.log("FOUND targetRightIndex", targetRightIndex);
        }


        if (arr[middleIndex] < target) {
            console.log("middle less than target")
            leftIndex = middleIndex + 1;
        }
        else if (arr[middleIndex] > target) {
            console.log("middle greater than target")
            rightIndex = middleIndex - 1;
        }
        else {
            if (targetLeftIndex) {
                leftIndex = middleIndex;
                console.log("looking for targetRightIndex");
            }
            else {
                rightIndex = middleIndex;
                console.log("looking for targetLeftIndex");
            }
        }
    }
}

module.exports = sortedFrequency