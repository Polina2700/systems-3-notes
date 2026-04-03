function GroupCard({isSelected, onCardClick, grpName, id}) {
    return(
        <div className={isSelected ? "group-card-selected" : ''}
        onClick={() => onCardClick(id)}>
            <h1>Group Name: {grpName}</h1>
            <p>Description: blabla </p> 
        </div>
    )
}

export default GroupCard;