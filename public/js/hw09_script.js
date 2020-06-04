//Задание №4
let tries = 3;
document.getElementById('task04-cnt').innerText = tries;
document.getElementById('task04-refresh').addEventListener('click', refreshField);

function refreshField(e) {
    let n = parseInt(document.getElementById('task04-n').value);
    createField(n);
}

function openCell(event) {
    if(tries!=0) {
        tries -= 1;
        document.getElementById('task04-cnt').innerText = tries;
        let div_el = event.target;
        div_el.classList.add('task04-cell-open');
        div_el.children[0].classList.toggle('task04-p-hidden');    
    } else {
        tries = 3;
        document.getElementById('task04-cnt').innerText = tries; 
        createField(parseInt(document.getElementById('task04-n').value));       
    }
}
function createField(n) {
    let prize_cnt = 0;
    tries = 3;
    document.getElementById('task04-cnt').innerText = tries;
    let container = document.getElementById('task04-container');
    container.innerHTML = '';
    for(let i=0; i<n; i++) {
        let div_row = document.createElement('div');
        div_row.classList.add('task04-div-row');

        for(let j=0; j<n; j++) {
            let div_cell = document.createElement('div');
            div_cell.classList.add('task04-div-cell');
            div_cell.style.width = `calc(100%/${n})`;
            let rnd = Math.random();
            let p = document.createElement('p');
            p.classList.add('task04-p-hidden');
            p.innerText = 'Пусто';
            if(rnd<=0.2 && prize_cnt<=3) {
                p.innerText = 'Приз'; 
                prize_cnt += 1;
            } 
            div_cell.appendChild(p);
            div_cell.addEventListener('click', openCell);
            div_row.appendChild(div_cell);
        }
        container.appendChild(div_row);
    }
}

let n = parseInt(document.getElementById('task04-n').value);
createField(n);


//Задание №4
let books = [
    {
        артикул: 1,
        автор: "Сапковский Анджей",
        наименование: "Последнее желание",
        описание: "Ведьмак – это мастер меча и мэтр волшебства, ведущий непрерывную войну с кровожадными монстрами, которые угрожают покою сказочной страны. «Ведьмак» – это мир на острие меча, ошеломляющее действие, незабываемые ситуации, великолепные боевые сцены.",
        картинка: ""
    },
    {
        артикул: 2,
        автор: "Кинг Стивен",
        наименование: "Интистут",
        описание: "Еще недавно у двенадцатилетнего Люка Эллиса была вполне привычная жизнь: школа, обеды с родителями в любимой пиццерии, вечера в компании лучшего друга… Пока одним июньским утром он не просыпается в собственной комнате, вот только в ней нет окон и находится она в тщательно укрытом от всего мира",
        картинка: ""
    },
    {
        артикул: 3,
        автор: "Стругацкие А и Б",
        наименование: "Пикник на обочине",
        описание: "Пожалуй, в истории современной мировой фантастики найдется не так много произведений, которые оставались бы популярными столь долгое время. Повесть послужила основой культового фильма Тарковского «Сталкер»; через три десятилетия появились не менее культовая компьютерная игра с тем же названием и...",
        картинка: ""
    },
    
    {
        артикул: 4,
        автор: "Георгий Смородинский",
        наименование: "Семнадцатое обновление",
        описание: "Сверхпопулярная онлайн-игра «Мир Аркона» получила семнадцатое обновление. Отныне все ощущения, которые пользователи, погруженные в индивидуальные капсулы, испытывают в процессе игры, стали неотличимы от реальных. Это в полной мере прочувствовал Роман Кожевников, не по своей воле оказавшийся в Арконе. И не просто в Арконе, а в самом страшном его месте – Землях Демонов. Слившись со своим персонажем, демоном Крианом, Роман должен не только выжить, но и отомстить за свое заточение в виртуальной реальности, где достоверность болевых ощущений достигла ста процентов…",
        картинка: ""
    },
    {
        артикул: 5,
        автор: "Алексей Осадчук",
        наименование: "Цитадель",
        описание: "«Если ты доблестный воин, желающий совершить подвиг, – нам всегда нужен еще один герой на крепостных стенах Марагарской Цитадели! Ты могущественный маг, ищущий забытые знания? Посети Древнюю Библиотеку! И тебе откроются многие тайны!",
        картинка: ""
    },
    {
        артикул: 6,
        автор: "Дем Михайлов",
        наименование: "Господство кланов",
        описание: "Огромный мир, наполненный приключениями и древними тайнами, чудовищами, жаждущими твоей смерти. Мир, в котором каждый может добиться исполнения своих самых заветных желаний и стать кем угодно – удачливым в делах торговцем, мудрым отшельником, отважным воином или же боевым магом, которому подвластны разрушительные стихии. Но не следует ожидать, что твой путь к исполнению мечты будет легким и безоблачным. Путь к вершине очень долог, если ты вообще до нее дойдешь.",
        картинка: ""
    }
];

function crtTableElement(prntEl, type, text) {
    let tEl = document.createElement(type);
    if(text!=undefined) {
        tEl.innerText = text;
    }
    if(type=="table"){
        tEl.classList.add("task05");
    }
    if(type=="th") {
        tEl.addEventListener('click', sortTable);    
    }
    prntEl.appendChild(tEl);
    return tEl;
}

function setTableStyle() {
    let StyleText =  `table.task05{text-decoration: none;border-collapse:collapse;width:100%;text-align:center;}
	table.task05 th{width:auto; font-weight:normal;font-size:14px; color:#ffffff;background-color:#354251;}
	table.task05 td{font-size:13px;color:#000000;text-align:left;}
    table.task05 td,table.task04 th{white-space:pre-wrap;padding:10px 5px;line-height:13px;vertical-align: middle;border: 1px solid #354251;}	
    table.task05 tr:hover{background-color:#e0e0e0}
    table.task05 tr:hover td{color:#000000;cursor:default;}`;

    //let styleEl = document.getElementsByTagName("style");
    let styleEl = document.getElementById("table-style");
    if(styleEl==null){
        let styleEl = document.createElement("style");
        styleEl.type = "text/css";
        styleEl.innerHTML = StyleText;
        styleEl.setAttribute("id", "table-style");
        document.getElementsByTagName("head")[0].appendChild(styleEl);
    } else {
        if(styleEl.innerHTML!=StyleText) {
            styleEl.innerHTML = StyleText;
        }
    }
}

function createTableBooks() {

    setTableStyle();

    let task04_container = document.getElementById("task05");
    task04_container.innerHTML="";
    //Создаем таблицу
    let tbl = crtTableElement(task04_container, "table");

    //Берем 0 элемент массива и выводим заголовок таблицы
    let tr = crtTableElement(tbl, "tr");
    for(let prop in books[0]) {
        crtTableElement(tr, "th", prop);    
    }

    //Создаем строки таблицы
    for(let i=0; i<books.length; i++) {
        let tr = crtTableElement(tbl, "tr");
        for(let prop in books[i]) {
           crtTableElement(tr, "td",  books[i][prop]);    
        }    
    }

}

createTableBooks();


function sortTable(event) {
    let el = event.srcElement;
    let prop_name = el.innerText;

    books.sort(function(a,b) {
        if(a[prop_name]>b[prop_name]){
            return 1;
        } else if(a[prop_name]<b[prop_name]){
            return -1;
        } else {
            return 0
        }
        });
    createTableBooks();
}