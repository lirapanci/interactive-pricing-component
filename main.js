let input = document.getElementById('input');
let priceOutput = document.getElementById('price');
let toggleSwitch = document.getElementById('toggle');
let price = [8, 12, 16, 24, 36];

function setPrice(toggle, price){
    if(toggle.checked){
        const yearlyPrice = 0.75 * price;
        priceOutput.innerHTML = yearlyPrice.toFixed(2);
    } else {
        priceOutput.innerHTML = price.toFixed(2);
    }
}

input.addEventListener('input', function (e){
    let target = e.target
    const min = target.min
    const max = target.max
    const val = target.value

    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'

    let pageviews = ['10K','50K','100K','500K','1M'];

    let pageviewOutput = document.getElementById('pageviews');
    pageviewOutput.innerHTML = pageviews[val];

    setPrice(toggleSwitch, price[val]);
});

toggleSwitch.addEventListener('change', function (e){
    setPrice(e.target, price[input.value]);
});