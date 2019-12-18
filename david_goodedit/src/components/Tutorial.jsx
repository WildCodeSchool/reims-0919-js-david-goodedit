import React from 'react'
import './Tutorial.css'

function Tutorial() {
  return (
    <div>
      <h1>Tutoriel</h1>
      <div>
        <div>
          <h2>Les titres :</h2>
          <p>Plus vous rajouter de #, plus le titre est petit</p>
          <div className="transformation">
            <p>#Titre</p>
            <p className='titleH1'>Titre</p>
          </div>
          <div className="transformation">
            <p>##Titre</p>
            <p className='titleH2'>Titre</p>
          </div>
          <div className="transformation">
            <p>###Titre</p>
            <p className='titleH3'>Titre</p>
          </div>
          <div className="transformation">
            <p>####Titre</p>
            <p className='titleH4'>Titre</p>
          </div>
        </div>
        <div>
          <h2>Les listes :</h2>
          <h3>Les listes ordonnées :</h3>
          <div className="transformation">
            <p>1. Avoir une idée<br />2. Trouver des fonds<br />
                3. ?<br />4. Profit
            </p>
            <p className='titleH4'>Titre</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tutorial