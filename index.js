const questions = [];
for (let i = 1; i <= 5; i++) {
    questions[i - 1] = document.querySelector(`label.label${i}`);
}

const answers = [];
for (let i = 1; i <= 5; i++) {
    answers[i - 1] = document.getElementById(`answer${i}`);
}

const imagens = [];
for (let i = 1; i < 5; i++) {
    imagens[i - 1] = document.getElementById(`img-plus${i}`)    
}

const checkbox = [];
for (let i = 1; i < 5; i++) {
    checkbox[i - 1] = document.getElementById(`plus${i}`)    
}

answers[0].style.height = '90px';
imagens[0].src = 'assets/images/icon-minus.svg';
answers[1].style.height = '0';
answers[2].style.height = '0';
answers[3].style.height = '0';

function mostrar(pergunta, check, source, height) {
    if (checkbox[check].checked) {
        imagens[pergunta].src = source;
        answers[pergunta].style.height = height;
    } else {
        imagens[pergunta].src = 'assets/images/icon-plus.svg';
        answers[pergunta].style.height = '0';  
    }
}
