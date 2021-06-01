function add() {
    var nome = document.getElementById("nome");
    var propriedade = document.getElementById("prioridade");
    var data = document.getElementById("data");

    cadastro = {
        tarefa: nome.value,
        propriedade: propriedade.value,
        data: data.value
    }
    // window.localStorage.getItem("tarefas").then(tarefas=>{
    //     const tarefasLS = JSON.parse(tarefas)
    //     console.log(tarefasLS)
    // });
    const tarefasLS = JSON.parse(localStorage.getItem("tarefas"));
    console.log(tarefasLS);
    const todasTarefas = [...tarefasLS]
    todasTarefas.push(cadastro);
    localStorage.setItem('tarefas', JSON.stringify(todasTarefas));
    // tarefasLS.push(cadastro);
    // localStorage.setItem('tarefas', JSON.stringify(tarefaLS));
    // console.log(tarefasLS);

    // localStorage.setItem('cadastro', JSON.stringify(cadastro));
}



