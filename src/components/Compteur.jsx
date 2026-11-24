function Compteur() {
    const [nbr, setNbr] = useState(0)

    function increment() {
        setNbr(nbr + 1)
    }

    function decrement() {
        if (nbr > 0) {
            setNbr(nbr - 1)
        }
    }

    function reset() {
        setNbr(0)
    }

    return <div>
        <span>Nombre : {nbr}</span>
        <button onClick={increment}>+ 1</button>
        <button onClick={decrement}>- 1</button>
        <button onClick={reset}>reset</button>
    </div>
}

export default Compteur