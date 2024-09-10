let listaDeTarefas = []
let lista, elemento
function adicionaTarefa(){
    listaDeTarefas.push(document.getElementById
        ('id_tarefa').value)
localStorage.tarefa = JSON.stringify(listaDeTarefas)
 alert("Tarefa adicionada com sucesso!")
lista = document.createElement('ol')
for(let i = 0;i<listaDeTarefas.length; i++){
   elementoLista = document.createElement('li')
elementoLista.innerText = listaDeTarefas[i]
   lista.append(elementoLista)
btExcluir = document.createElement('button')
btExcluir.innerText = 'Excluir Tarefa' + (i+1)
btExcluir.setAtrribute('onclick','excluirTarefa()')
document.body.append(btExcluir)
}
document.body.append(lista)
}
function excluirTarefa(){   
}
