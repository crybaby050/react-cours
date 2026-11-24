import { useState } from "react"

function Gestionnaire({ produits, setProduits }) {

    const [form, setForm] = useState({
        nom: "",
        quantite: "",
        prix: ""
    })

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()

        if (!form.nom.trim()) {
            console.log("Le nom est obligatoire");
            return;
        }
        if (Number(form.prix) <= 0) {
            console.log("Le prix est obligatoire");
            return;
        }
        if (Number(form.quantite) <= 0) {
            console.log("Le quantite est obligatoire");
            return;
        }

        ajouterProduit(form.nom, Number(form.prix), Number(form.quantite))
        console.log("Produit ajouter avec succées");
        setForm({ nom: "", quantite: "", prix: "" })
    }

    function ajouterProduit(nom, prix, quantite) {
        const newProduit = {
            id: Date.now(),
            nom: nom,
            prix: prix,
            quantite: quantite
        }
        setProduits(prev => [...prev, newProduit])
    }

    function supprimerProduit(id){
        setProduits(produits.filter(produit => produit.id !== id))
        console.log("Produit supprimer avec succes")
    }

        return <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nom"
                    placeholder="Nom"
                    value={form.nom}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="prix"
                    placeholder="prix"
                    value={form.prix}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="quantite"
                    placeholder="quantite"
                    value={form.quantite}
                    onChange={handleChange}
                />
                <button type="submit">Soumettre</button>
            </form>


            <h2>Affichage</h2>
            <div>
                <ul>
                    {produits.map(produit => (
                        <li key={produit.id}>
                            Nom: {produit.nom} - 
                            Prix: {produit.prix} - 
                            Quantite: {produit.quantite}
                            <button onClick={() => supprimerProduit(produit.id)}>Supprimer</button>
                            </li>
                    ))}
                </ul>
            </div>
            <h3>Statistique</h3>
            <div>
                <p>Nombre total de broduit : <strong>{produits.length}</strong></p>
                <p>Valeur total des produits : <strong>{produits.reduce((total, produit) => (
                    total + produit.prix * produit.quantite
                ), 0)}</strong></p>
            </div>
        </div>
    }

    export default Gestionnaire