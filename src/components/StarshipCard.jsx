

const StarshipCard = ({ship}) => {

    return (
        <>
        <h3>{ship.name}</h3>
        <p>{ship.model}</p>
        <p>{ship.manufacturer}</p>
        <p>{ship.starship_class}</p>
        </>
        
    )
}

export default StarshipCard