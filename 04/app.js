document.addEventListener('DOMContentLoaded', init);

function init() {
    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, '#000000');
    let boxShadowColor = '#000000'
    let boxShadowOpacity = 1

    const inputColor = document.querySelector('input[type="color"]')
    const inputRange = document.querySelector('input[type="range"]')

    inputColor.addEventListener('change', function (e) {
        boxShadowColor = e.target.value
        setBoxShadow(boxElement, boxShadowColor)
    })
    inputRange.addEventListener('input', function(e){
        boxShadowOpacity = e.target.value / 100
        setBoxShadow(boxElement, boxShadowColor, boxShadowOpacity)
    })
}

function setBoxShadow(element, colorInHex, opacity = 1) {
    const colorInRGBA = `rgba(
        ${getChannelColor(colorInHex, 'red')}, 
        ${getChannelColor(colorInHex, 'green')}, 
        ${getChannelColor(colorInHex, 'blue')}, 
        ${opacity}
    )`;

    element.style.boxShadow = `0 0 5px 5px ${colorInRGBA}`;
}


function getChannelColor(colorInHex, channelName) {
    let start;
    switch (channelName) {
        case 'red':
            start = 1;
            break;
        case 'green':
            start = 3;
            break;
        case 'blue':
            start = 5;
            break;
    }

    const channelColorHex = colorInHex.substr(start, 2);
    const channelColorDec = parseInt(channelColorHex, 16);

    return channelColorDec;
}


