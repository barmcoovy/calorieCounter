const ages = [];

for (let i = 1; i < 100; i++) {
    ages.push(i);
}
ages.map((value)=>{
    document.querySelector('#age').innerHTML += `<option class="age" value="${value}">${value}</option>`
    if(value===21){
        document.querySelector('#age').innerHTML += `<option class="age" value="${value}" selected>${value}</option>`
    }
})