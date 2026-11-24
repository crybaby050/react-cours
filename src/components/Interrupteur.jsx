function Interrupteur() {
    const [bouton, setBouton] = useState(false)

    function changement() {
        setBouton(!bouton)
    }

    return (
        <div>
            {bouton && <p>Bonjour ! Bienvenue dans mon application React.</p>}
            <button onClick={() => changement(bouton)}>Afficher</button>
        </div>
    )
}

export default Interrupteur