// const arr = [2, 3, 5, 7, 8, 10, 12, 15, 18, 20];
const arr = [];
// const mid = arr[midIndex];
const dataIn = [];
process.stdin.on("data", data => {
    dataIn.push(Number(data.toString()));
    let target = dataIn[0];
    let iteration = dataIn[1];
    if (iteration) {
        for (let i = 1; i <= iteration; i++) {
            arr.push(i);
        }
    }
    if (dataIn.length > 1) {
        const highIndex = arr.length - 1;
        const lowIndex = 0;

        console.time("Binary Search");
        BinarySearch(lowIndex, highIndex, target, arr);
        console.timeEnd("Binary Search");

        console.time("Linear Search");
        LinearSearch(lowIndex, target, arr);
        console.timeEnd("Linear Search");
        console.log("End!");
        process.exit();
    }

});


function BinarySearch(lowIndex, highIndex, target, arr) {
    const midIndex = Math.floor((lowIndex + highIndex) / 2);
    const mid = arr[midIndex];
    // console.log(lowIndex, mid, highIndex, arr);
    if (typeof target != "number") {
        console.log("This parameter has to be Number");
        return;
    }

    if (lowIndex > highIndex) {
        console.log("Not Found!");
        return -1;
    }
    if (target == mid) {
        console.log("Target found using Binary at index: ", midIndex);
        return;
    }

    if (mid > target) {
        highIndex = midIndex - 1;
        return BinarySearch(lowIndex, highIndex, target, arr);
    } else {
        lowIndex = midIndex + 1;
        return BinarySearch(lowIndex, highIndex, target, arr);
    }

}

function LinearSearch(pointer, target, arr) {
    if (pointer > arr.length - 1) {
        console.log("Not Found!!");
        return -1;
    }
    if (target == arr[pointer]) {
        console.log("Target found using Linear at index: ", pointer);
        return pointer;
    }
    return LinearSearch(++pointer, target, arr);
}

