const tarefas = 
[
    {
        tarefa: "Estudar",
        prioridade: "Alta",
        data: "01/06/2021",
        status: false
    }, 
    {
        tarefa: "Caminhar",
        prioridade: "Media",
        data: "02/06/2021",
        status: true
    }, 
    {
        tarefa: "Comer",
        prioridade: "Baixa",
        data: "03/06/2021",
        status: false
    }, 
    {
        tarefa: "Andar",
        prioridade: "Alta",
        data: "04/06/2021",
        status: true
    }
]
if(localStorage.getItem("tarefas")== null){
    localStorage.setItem("tarefas",JSON.stringify(tarefas));
}