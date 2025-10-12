<<<<<<< HEAD
import { rules, createComparison } from "../lib/compare.js";
=======
import {rules, createComparison} from "../lib/compare.js";
>>>>>>> 031bc318760db09890e3cc4fbcbb4171435dff33


export function initSearching(searchField) {
    // @todo: #5.1 — настроить компаратор
<<<<<<< HEAD
    const compare = createComparison(
        [rules.skipEmptyTargetValues], // только это правило из стандартных
        [rules.searchMultipleFields(searchField, ['date', 'customer', 'seller'], false)] // правило поиска по нескольким полям
    );

    return (data, state, action) => {
        // @todo: #5.2 — применить компаратор
        if (state[searchField]) {
            return data.filter(row => compare(row, state));
        }
=======

    return (data, state, action) => {
        // @todo: #5.2 — применить компаратор
>>>>>>> 031bc318760db09890e3cc4fbcbb4171435dff33
        return data;
    }
}