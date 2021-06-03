const tarefas = 
[
    {
        tarefa: "Estudar",
        prioridade: "Alta",
        data: "01/06/2021"
    }, 
    {
        tarefa: "Caminhar",
        prioridade: "Media",
        data: "02/06/2021"
    }, 
    {
        tarefa: "Comer",
        prioridade: "Baixa",
        data: "03/06/2021"
    }, 
    {
        tarefa: "Andar",
        prioridade: "Alta",
        data: "04/06/2021"
    }
]
if(localStorage.getItem("tarefas")== null){
    localStorage.setItem("tarefas",JSON.stringify(tarefas));
}