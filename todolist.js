const input = document.querySelector('.input');
const addBtn = document.querySelector('#btn');
const list = document.querySelector('.todo-list');

function addItem(e) {
	e.preventDefault();
	const work = input.value;

	const todoDiv = document.createElement('div');
	todoDiv.classList.add('todo');

	const li = document.createElement('li');
	li.innerHTML = work;
	li.classList.add('todo-item');
	todoDiv.appendChild(li);

	const comBtn = document.createElement('button');
	comBtn.classList.add('done');
	comBtn.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>';
	todoDiv.appendChild(comBtn);

	const delBtn = document.createElement('button');
	delBtn.classList.add('delete');
	delBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
	todoDiv.appendChild(delBtn);

	list.appendChild(todoDiv);

	input.value = '';
}

addBtn.addEventListener('click', addItem);

function check(e) {
	const item = e.target;

	if (item.classList[0] == 'done') {
		const todo = item.parentElement;
		todo.classList.toggle('completed');
	}

	if (item.classList[0] == 'delete') {
		const todo = item.parentElement;
		todo.classList.add('fall');

		todo.addEventListener('transitionend', function () {
			todo.remove();
		});
	}
}

list.addEventListener('click', check);
