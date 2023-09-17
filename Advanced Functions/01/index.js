function area() {
    return Math.abs(Number(this.x)*Number(this.y));
}
function vol() {
    return Math.abs(Number(this.x)*Number(this.y)*Number(this.z));
}
function solve(area,vol,arr) {
    let objects=JSON.parse(arr);
    let results=[];
    for(let obj of objects) {
        function calc(obj) {
            let areaObj=area.call(obj);
            let volumeObj=vol.call(obj);
            return {area:areaObj, volume:volumeObj};
        }
        results.push(calc(obj));
    }
    for(let item of results) {
        console.log(item);
    }
}
solve(area, vol, `[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
    ]`);