const inputTask=document.getElementById('input-task');
const addbtn=document.getElementById('add-btn');
const tasklist=document.querySelector('.task-list');

addbtn.addEventListener('click',function(){
    const text = inputTask.value;

    const col = document.createElement('div');
    col.classList.add('col');

    const card = document.createElement('div');
    card.classList.add('card')
    card.style.width = ('18rem')

    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = text

    const textarea = document.createElement('textarea');
    textarea.classList.add('form-control')
    textarea.placeholder = 'Leave a coment here';
    textarea.style.width = ('150px');
    textarea.style.height = ('100px');

    const checkDiv = document.createElement('div');   
    checkDiv.classList.add('form-check');

    const checkbox = document.createElement('input');
    checkbox.classList.add('form-check-input');
    checkbox.type = 'checkbox';

    const label=document.createElement('label');
    label.classList.add ('form-check-label');
    label.textContent = 'task done';
    
    col.appendChild(card)
    checkDiv.appendChild(checkbox);
    checkDiv.appendChild(label);
    card.appendChild(title);
    card.appendChild(textarea);
    card.appendChild(checkDiv);
    tasklist.appendChild(col);

    inputTask.value = '';
})