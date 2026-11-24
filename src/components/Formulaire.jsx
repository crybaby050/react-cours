import { useState } from "react"

function Formulaire(){
    const [form, setForm] = useState({
        nom: "",
        email: "",
        age: "",
        pays: "",
        condition: false
    })

    const [erreurs, setErreurs] = useState({
        nom: "",
        email: "",
        age: "",
        pays: "",
        condition: ""
    });


    const [inscription, setInscription] = useState(null)

    function handleChange(e){
        const {name, value, type, checked} = e.target
        setForm(prev => ({
            ...prev, [name]: type === "checkbox" ? checked : value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        setInscription(null);

        const nouvellesErreurs = {
            nom: "",
            email: "",
            age: "",
            pays: "",
            condition: "",
        }

        if (!form.nom.trim()) {
            nouvellesErreurs.nom = "Le nom est obligatoire";
        }

        if (!form.email.includes("@")) {
            nouvellesErreurs.email = "L'email est invalide";
        }

        if (form.age === "" || Number(form.age) <= 0) {
            nouvellesErreurs.age = "L'âge doit être supérieur à 0";
        }

        if (!form.pays) {
            nouvellesErreurs.pays = "Veuillez choisir un pays";
        }

        if (!form.condition) {
            nouvellesErreurs.condition = "Vous devez accepter les conditions";
        }
        const valeurs = Object.values(nouvellesErreurs)
        const resultat = valeurs.some(erreur => erreur !== "")
        
        setErreurs(nouvellesErreurs)

        if(resultat){return}


        

        setInscription(form)

    }

return <div>
    <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        name="nom"
        placeholder="Saisir le nom"
        value={form.nom}
        onChange={handleChange}
        />
        {erreurs.nom && <p>{erreurs.nom}</p>}

        <input 
        type="email"
        name="email" 
        placeholder="Ex: exemple@gmail.com"
        value={form.email}
        onChange={handleChange}
        />
        {erreurs.email && <p>{erreurs.email}</p>}

        <input 
        type="number" 
        name="age"
        placeholder="Ex : 18" 
        value={form.age}
        onChange={handleChange}
        />
        {erreurs.age && <p>{erreurs.age}</p>}

        <select 
        name="pays"
        value={form.pays}
        onChange={handleChange}
        >
            <option value="">-- Choisir --</option>
            <option value="Sénégal">Sénégal</option>
            <option value="France">France</option>
            <option value="Finland">Finland</option>
        </select>
        {erreurs.pays && <p>{erreurs.pays}</p>}

        <input 
        type="checkbox" 
        name="condition" 
        checked={form.condition}
        onChange={handleChange}
        />
        {erreurs.condition && <p>{erreurs.condition}</p>}

        <button type="submit">Soumettre</button>
    </form>

    {inscription && <div>
        <h2>Vos infos</h2>
        <p>Nom : {inscription.nom}</p>
        <p>Email : {inscription.email}</p>
        <p>Âge : {inscription.age}</p>
        <p>Pays : {inscription.pays}</p>
        <p>Conditions acceptées : {inscription.condition ? "Oui" : "Non"}</p>
        </div>}
</div>

}


export default Formulaire