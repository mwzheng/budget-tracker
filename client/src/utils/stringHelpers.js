// Credits to Tuan: https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
// Capitalizes the first letter of each word in a string

// eslint-disable-next-line
String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
};


// Credit to Zamaria: https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
// Adds commas to numbers
export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}