let data_obj = {
    "USD": 1, "INR": 80, "ARS": 825.75, "AUD": 1.52, "BGN": 1.8, "BRL": 4.95, "BSD": 1, "CAD": 1.34,
    "CHF": 0.862, "CLP": 923.33, "CNY": 7.18, "COP": 4013.1, "CZK": 22.88, "DKK": 6.88, "AED": 3.67,
}

let searchbox = document.querySelector('.Searchbox');
// console.log( searchbox);
let From_value = document.querySelector(".From");
let To_value = document.querySelector(".To");
let convert_btn = document.querySelector(".Convert");
let F_amount = document.querySelector(".final-amount");
// console.log(F_amount);
let show = document.querySelector(".convert-value");
let button = document.querySelector(".convert-btn");
let swap_btn = document.querySelector(".swap-btn");

convert_btn.addEventListener("click", () => {
    if (searchbox.value.trim() == "" || From_value.value.trim() == "" || To_value.value.trim() == "") {
        alert("Please fill the blank")
    } else {
        let searchvalue = searchbox.value;
        let from_value = data_obj[From_value.value];
        let to_value = data_obj[To_value.value];
        let total_amount = ((to_value / from_value) * searchvalue);
        F_amount.innerText = total_amount;
        show.style.display = "block";
    }
})
button.addEventListener("click", () => {
    searchbox.value = "";
    From_value.value = "";
    To_value.value = "";
    show.style.display = "none"
})
swap_btn.addEventListener("click", () => {
    let left_value = From_value.value;
    let right_value = To_value.value;

    let svalue = From_value.value = right_value;
    let s_value = To_value.value = left_value;
    let sb_value = searchbox.value;

    let final_amount = ((data_obj[s_value] / data_obj[svalue]) * sb_value).toFixed(2);
    F_amount.innerText = final_amount;

})
// function clearVal() {
//     searchbox.value = "";
//     From_value.value = "";
//     To_value.value = "";
//     show.style.display = "none"
// }