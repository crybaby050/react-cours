function Bouton({augmenter, reinitialiser}){
    return <div>
        <button onClick={augmenter}>Augmenter</button>
        <button onClick={reinitialiser}>reinitialiser</button>
    </div>
}

export default Bouton