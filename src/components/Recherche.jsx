import { useState } from "react";

function Recherche(){
    const [nom, setNom] = useState("")
    const [desc, setDes] = useState("")

    return <div>
        <input 
        type="text"
        value={nom}
        //onChange={}
        placeholder="Rechercher..."
        />
        <textarea value={desc}
        //onChange={}
        id=""></textarea>
        <p>{nom}</p>
        <p>{desc}</p>
    </div>
}

export default Recherche