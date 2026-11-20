function Tache({ id, titre, terminee, onBasculer, onSupprimer }) {
  return (
    <li className={terminee ? 'tache terminee' : 'tache'}>
      <span className="titre">
        <input 
          type="checkbox" 
          checked={terminee} 
          onChange={() => onBasculer(id)} 
        />
        {' '}{titre}
      </span>
      <button className="danger" onClick={() => onSupprimer(id)}>
        Supprimer
      </button>
    </li>
  )
}

export default Tache