import { useState } from "react";
import Compteur from "./components/Compteur";
import Interrupteur from "./components/Interrupteur";
import ToDoListe from "./components/ToDoListe";
import Recherche from "./components/Recherche";
import Gestionnaire from "./components/Gestionnaire";
import Formulaire from "./components/Formulaire";

//const tachesInitiales = [
//    { id: 1, titre: "Apprendre React" },
//    { id: 2, titre: "Pratiquer useState" },
//    { id: 3, titre: "Faire un exercice" }
//];

const produitsInitiaux = [
  { id: 1, nom: "Riz", prix: 500, quantite: 20 },
  { id: 2, nom: "Huile", prix: 1500, quantite: 5 },
  { id: 3, nom: "Sucre", prix: 700, quantite: 10 }
];


function App(){
  const [produits, setProduits] = useState(produitsInitiaux)
  return (
    <>
      <Formulaire/>
    </>
  )
}

export default App;