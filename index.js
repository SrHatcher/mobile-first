const arrow_right=document.getElementById("arrow-right");
const arrow_left=document.getElementById("arrow-left");

const currency_table=document.getElementById("currency-table");
const comisions_table=document.getElementById("comisions-table");

arrow_right.onclick = function () {
    currency_table.style.display="none";
    comisions_table.style.display="block"
    arrow_left.style.display="block";
    arrow_right.style.display="none";
}

arrow_left.onclick = function () {
    currency_table.style.display="block";
    comisions_table.style.display="none";
    arrow_right.style.display="block";
    arrow_left.style.display="none";
}