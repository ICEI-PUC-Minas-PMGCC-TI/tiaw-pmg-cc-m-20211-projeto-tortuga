const carregaTarefas = () => {
    const tarefasContainer = document.getElementById("tarefasContainer"); //pegar o elemento da tarefa
    console.log(tarefasContainer);
    const tarefasLS = JSON.parse(localStorage.getItem("tarefas")); //pegar o local storage com o id da tarefa
    console.log(tarefasLS);
    
    tarefasLS.map(tarefa => {
        const data = `<button style='width: 150px' type="button" class="btn btn-success tarefa">${tarefa.data}</button>`
        const button = `<button style='margin-left: 10px' type="button" class="btn btn-success tarefa">${tarefa.tarefa}</button>` //configurar o codigo html como se fosse o display da tarefa
        let status
        if(tarefa.status == true){
            status =`<input type="checkbox" checked>`
        }else{ 
            status =`<input type="checkbox">`
        }
        const componenteTarefa = `<li class= "tarefa-container">${data} ${button} ${status}</li>`
        console.log(componenteTarefa);
        tarefasContainer.insertAdjacentHTML( 'beforeend', componenteTarefa ); //add a tarefa no html
    })
}

carregaTarefas();