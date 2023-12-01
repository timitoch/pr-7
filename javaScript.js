const formdiv = document.createElement('div');
const h1 = document.createElement('h1');
const button = document.createElement('button');
const questioninput = document.createElement('input'); 

const spherediv = document.createElement('div');
const answerdiv = document.createElement('div');
const answerp = document.createElement('p');

formdiv.id = 'form';
h1.id = 'h1';
spherediv.id = 'sphere';
answerp.id = 'answer';
questioninput.id = 'question'; // додано тут

button.textContent = 'надіслати';
h1.textContent = 'Магічна куля';

questioninput.setAttribute('type', 'text');
questioninput.setAttribute('placeholder', 'Задайте питання');

document.body.appendChild(formdiv);
document.body.appendChild(spherediv);
document.body.appendChild(answerdiv);
formdiv.appendChild(h1);
formdiv.appendChild(questioninput);
formdiv.appendChild(button);
spherediv.appendChild(answerp);
answerdiv.appendChild(answerp);

button.onclick = getAnswer;

function getAnswer() {
    const question = document.getElementById('question').value;
    const answer = document.getElementById('answer');

    if (question.trim() === '') {
        answer.innerHTML = 'Задайте питання';
    } else {
        const answers = ['так', 'ні', 'можливо', 'спитай пізніше', 'хто знає', 'не скажу', 'спитай знову'];
        const randomIndex = Math.floor(Math.random() * answers.length);
        const Answer = answers[randomIndex];
        answer.innerHTML = `<strong>${Answer}</strong>`;
    }
}
