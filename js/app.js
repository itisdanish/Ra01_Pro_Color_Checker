const colorInput = document.getElementById('color');
const colorBlock = document.getElementById('plate')
colorInput.addEventListener('input', event=>{
    const color = event.target.value;
    const hexColorRange = /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
    if ( color.match(hexColorRange)){
        colorInput.style.borderColor=color;
        colorBlock.style.backgroundColor=color;
    }else{
        colorInput.style.borderColor= 'rgb(226,226,226)'
        colorBlock.style.backgroundColor='#EDEDED'
    }
})