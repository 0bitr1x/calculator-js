let display = document.querySelector('.str');
const btn = document.querySelectorAll('.btn');
let a = '', b = '', operator = '', indBtn = 0;
for(let enem of btn) enem.addEventListener('click', func);
function func(){
    console.log(this.textContent)
    if(this.id == 'clear') {
        a = '', b = '', operator = '';
        display.value = '0';
        indBtn.style = 'background: black;';
        indBtn = 0;
    }
    else if (this.id == "involution"){
        if(b == '') a = display.value *= -1;
        else b = display.value *= -1;
    } 
    else if (this.id == "comma"){
        if(display.value.indexOf('.') == -1) display.value += '.';
    }
    else if (this.id == 'num'){
        if(operator == ''){
            a = display.value == '0'
            ? display.value = this.textContent
            : display.value += this.textContent
        } else {
            if(b == '') display.value = '';
            indBtn.style = 'background: black;';
            b = display.value == '0'
            ? display.value = this.textContent
            : display.value += this.textContent
        }
    }
    else if (this.id == "expressions" && a != ''){
        if(b != '') b = '';
        operator = this.textContent;
        indBtn.style = 'background: black;';
        this.style = 'background: red;';
        indBtn = this;
    }
    else if (this.id == "result"){
        indBtn.style = 'background: black;';
        switch(operator){
            case '÷':
                a /= b;
                break;
            case '×':
                a *= b;
                break;
            case '+':
                a =(+a) + (+b);
                break;
            case '-':
                a -= b;
                break;
            default:
                break;
        }
        display.value = a;

    } 
    console.log(`"${a}", "${b}", "${operator}"`);
} 
