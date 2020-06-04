"use strict";

export let task01_lib = {
    getMin(arr) {
    if(!Array.isArray(arr)){
        alert("Передан не массив");
        return null;
    }

    let arr1 = arr.map(Number);

    let min = arr1[0];
    for(let i=1; i<arr1.length; i++){
        if(min>arr1[i]) {
            min = arr[i];
        }
    } 
    return min;
    },

    getMax(arr) {
        if(!Array.isArray(arr)){
            alert("Передан не массив");
            return null;
        }

        let arr1 = arr.map(Number);

        let max = arr1[0];
        for(let i=1; i<arr1.length; i++){
            if(max<arr1[i]) {
                max = arr[i];
            }
        } 
        return max;
    },

    getAverageSum(arr) {
        if(!Array.isArray(arr)){
            alert("Передан не массив");
            return null;
        }

        let arr1 = arr.map(Number);
        let sum = arr1.reduce((a,b) => a+b, 0);
        let average = sum/arr1.length;
        return average;
        
    },

    getArrayCopy(arr) {
        let new_arr = [];
        return new_arr.concat(arr);
    }
}