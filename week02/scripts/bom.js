const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); // you need to fill in the blank to reference the HTML element that is a unordered list element.

button.addEventListener('click', function() {
    //Code to execute when the button is clicked
    if (input.value.trim() !== ''){
        const li = document.createElement('li');
        li.textContent = input.value;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "❌";

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
        
        list.append(li);
        li.append(deleteButton);

        input.value = '';
        input.focus();
    } else {
        input.focus();
    }
});


