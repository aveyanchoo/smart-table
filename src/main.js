import './fonts/ys-display/fonts.css'
import './style.css'

<<<<<<< HEAD
import { data as sourceData } from "./data/dataset_1.js";

import { initData } from "./data.js";
import { processFormData } from "./lib/utils.js";

import { initTable } from "./components/table.js";
// @todo: подключение
import { initPagination } from "./components/pagination.js"
import { initSorting } from './components/sorting.js';
import { initFiltering } from './components/filtering.js'
import { initSearching } from './components/searching.js';



// Исходные данные используемые в render()
const { data, ...indexes } = initData(sourceData);
=======
import {data as sourceData} from "./data/dataset_1.js";

import {initData} from "./data.js";
import {processFormData} from "./lib/utils.js";

import {initTable} from "./components/table.js";
// @todo: подключение


// Исходные данные используемые в render()
const {data, ...indexes} = initData(sourceData);
>>>>>>> 031bc318760db09890e3cc4fbcbb4171435dff33

/**
 * Сбор и обработка полей из таблицы
 * @returns {Object}
 */
function collectState() {
    const state = processFormData(new FormData(sampleTable.container));
<<<<<<< HEAD
    const rowsPerPage = parseInt(state.rowsPerPage);    // приведём количество страниц к числу
    const page = parseInt(state.page ?? 1);                // номер страницы по умолчанию 1 и тоже число

    return {                                            // расширьте существующий return вот так
        ...state,
        rowsPerPage,
        page
=======

    return {
        ...state
>>>>>>> 031bc318760db09890e3cc4fbcbb4171435dff33
    };
}

/**
 * Перерисовка состояния таблицы при любых изменениях
 * @param {HTMLButtonElement?} action
 */
function render(action) {
    let state = collectState(); // состояние полей из таблицы
    let result = [...data]; // копируем для последующего изменения
    // @todo: использование
<<<<<<< HEAD
    result = applySearching(result, state, action)
    result = applyFiltering(result, state, action)
    result = applySorting(result, state, action)
    result = applyPagination(result, state, action)
=======
>>>>>>> 031bc318760db09890e3cc4fbcbb4171435dff33


    sampleTable.render(result)
}

const sampleTable = initTable({
    tableTemplate: 'table',
    rowTemplate: 'row',
<<<<<<< HEAD
    before: ['search', 'header', 'filter'],
    after: ['pagination']
=======
    before: [],
    after: []
>>>>>>> 031bc318760db09890e3cc4fbcbb4171435dff33
}, render);

// @todo: инициализация

<<<<<<< HEAD
const applySearching = initSearching('search'); // Инициализируем поиск с полем 'search'

const applySorting = initSorting([        // Нам нужно передать сюда массив элементов, которые вызывают сортировку, чтобы изменять их визуальное представление
    sampleTable.header.elements.sortByDate,
    sampleTable.header.elements.sortByTotal
]);

const applyFiltering = initFiltering(sampleTable.filter.elements, {    // передаём элементы фильтра
    searchBySeller: indexes.sellers                                // для элемента с именем searchBySeller устанавливаем массив продавцов
});

const applyPagination = initPagination(
    sampleTable.pagination.elements,             // передаём сюда элементы пагинации, найденные в шаблоне
    (el, page, isCurrent) => {                    // и колбэк, чтобы заполнять кнопки страниц данными
        const input = el.querySelector('input');
        const label = el.querySelector('span');
        input.value = page;
        input.checked = isCurrent;
        label.textContent = page;
        return el;
    }
);

=======
>>>>>>> 031bc318760db09890e3cc4fbcbb4171435dff33

const appRoot = document.querySelector('#app');
appRoot.appendChild(sampleTable.container);

render();
