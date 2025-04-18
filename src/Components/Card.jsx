
const Card = ({campName, selectedVar}) => {
    function handleClick(){
        selectedVar(String(campName))
        console.log(selectedVar)
    }
    return (
        <div>
            <div className="card">
                <button onClick={handleClick}><h2>{campName}</h2></button>
            </div>
        </div>
    )
}

export default Card