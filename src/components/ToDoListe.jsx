function ToDoListe({ tasks, setTask}) {
    function ajoutTask(){
        const newTask = {
            id : Date.now(),
            titre: "Nouvelle tache"
        }
        setTask([...tasks,newTask])
    }

    function supprimer(id){
        setTask(tasks.filter(task => task.id !== id))
    }

    return <div>
        <span>Nombre de taches: {tasks.length}</span>
        <h1>Liste des taches</h1>
        <ul>
            {tasks.map(task => (
                <li key={task.id}>{task.titre} <button onClick={() => supprimer(task.id)}>Supprimer</button></li>
            ))}
        </ul>
        <button onClick={ajoutTask}>Ajouter</button>
    </div>
}

export default ToDoListe