function linearSearch(arr,x){
    for(let i = 0; i< arr.length; i++){
        if (arr[i] === x){
            return i
        }
    }
    return Nan;
}

function binarySearch(arr,x){
    //Some logic
}

module.exports = {
    linear: linearSearch,
    binary: binarySearch
}