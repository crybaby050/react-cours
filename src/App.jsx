import { useState } from "react";
import Compteur from "./components/Compteur";
import Interrupteur from "./components/Interrupteur";
import ToDoListe from "./components/ToDoListe";
import Recherche from "./components/Recherche";
import Gestionnaire from "./components/Gestionnaire";
import Formulaire from "./components/Formulaire";
import Bouton from "./components/Bouton";



function App(){
  const [compteur, setCompteur] = useState(0)
  function augmenter(){
    setCompteur(compteur + 1)
  }
  function reinitialiser(){
    setCompteur(0)
  }
  return (
    <>
      <Compteur nombre={compteur}/>
      <Bouton augmenter={augmenter} reinitialiser={reinitialiser} />
    </>
  )
}

export default App;