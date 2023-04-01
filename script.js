let array = [1, [1.1, 1.2, 1.3], 2, 3];
generateList(array);
function generateList(array) {
    let countUl = "<ul>";
    const count = array.length;
    for (let i = 0; i < count; ++i) {
        let row = array[i];
        if (Array.isArray(row)) {
            countUl += "<li><ul>";
            for (let j = 0; j < row.length; ++j) {
                countUl += `<li>${row[j]}</li>`;
            }
            countUl += "</ul></li>";
        }
        else
            countUl += `<li>${row}</li>`;
    }
    countUl += "</ul>";
    document.body.innerHTML = countUl;
}