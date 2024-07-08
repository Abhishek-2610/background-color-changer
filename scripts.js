const button = document.getElementById('btn');
const colorText = document.querySelector('.color');

const hex = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F'
]

//add event listner on the button

button.addEventListener('click', () => {
    const hexColor = generateHexColor();
    document.body.style.backgroundColor = hexColor;
    colorText.textContent = hexColor;

})


//function to generate hex color
const generateHexColor = () => {
    let hexColor = '#';
    for(let i = 0; i < 6; i++){
        hexColor += hex[Math.floor(Math.random() * 16)];
    }
    return hexColor;
}