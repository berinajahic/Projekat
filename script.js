fetch('https://ptf-web-dizajn-2022.azurewebsites.net/books')
  .then(response => {
    return response.json();
  })
  .then(data => {
    renderBooks(data);
  })

const renderBooks = (books) => {
    const bookRow = document.getElementById('books-row');
    let resultHtml = '';

    books.forEach(book => {
      resultHtml += `
       <div class="card col-4 mx-2 my-2" style="width: 18rem;">
            <img src= "${book.image}" class="card-img-top" alt="Books">
             <div class="card-body">
                 <h5 class="card-title">${book.name}</h5>
                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <button type="button" class="btn btn-primary" onclick="completeTodo(${book.id})">Complete</button>
                 <button type="button" class="btn btn-danger" onclick="deleteTodo(${book.id})">Delete</button>
                 <span class="badge bg-${book.isCompleted ? 'success' : 'danger'}">${book.isCompleted ? 'Completed' : 'Active'}</span>
             </div>
         </div>`;
         console.log(book)
    });

         bookRow.innerHTML = resultHtml;
    }
    //
    // const completeTodo = (id) => {
    //     fetch(`${BASE_URL}/api/todos/${id}/complete`, {
    //         method: 'PUT'
    //     })
    //     .then(res => {
    //         console.log(res);
    //     })
    // }
    //
    // const addTodo = () => {
    //     const todoName = document.getElementById('todo-name').value;
    //
    //     fetch(`${BASE_URL}/api/todos/new`, {
    //         method: 'POST',
    //         headers: new Headers({'content-type': 'application/json'}),
    //         body: JSON.stringify({
    //             name: todoName
    //         })
    //     })
    //     .then(res => {
    //         console.log(res);
    //     })
    // }
    //
    // const deleteTodo = (id) => {
    //     fetch(`${BASE_URL}/api/todos/${id}`, {
    //         method: 'DELETE'
    //     })
    //     .then(res => {
    //         console.log(res);
    //     })
    // }console.log('tekst')
