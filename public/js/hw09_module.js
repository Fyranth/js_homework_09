//Первое задание
console.log('Задание №1');
import {task01_lib} from './task01_lib.js';

let array = [20,57,-10,34,1,3,9,13];
console.log('Наш массив', array);
console.log('получим минимальное: ', task01_lib.getMin(array));
console.log('получим максимальное: ', task01_lib.getMax(array));
console.log('получим средн.арифмет: ', task01_lib.getAverageSum(array));
let new_array = task01_lib.getArrayCopy(array);
console.log('new_array == array', new_array == array);
console.log('Наш новый массив', new_array);

//Второе задание
var chrt = document.getElementById('task02-chart').getContext('2d');

var data = {
    labels: [],
    datasets: [{
        label: 'мой график',
        borderColor: 'darkblue',
        data: []
    }]
};

var myFirstChart = new Chart(chrt, {
    type: 'line',
    data: data, 
});

for(let x=-4.99; x>-5 && x<5; x+=0.01) {
    myFirstChart.data.labels.push(x.toFixed(2));
    myFirstChart.data.datasets[0].data.push(f(x).toFixed(2));
}
myFirstChart.update();

function f(x) {
    let y =0;
    if(x<1) {
        y = (x*x) - (4*x);
    }else {
        y = 5/x;
    }
    return y;
}

