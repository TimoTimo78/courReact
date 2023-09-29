import React from 'react';

function Formulaire(props) {
    return (
        <div>
            <form>
  <label>
    <h2>Hello Toto</h2>
    Nom : 
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Envoyer" />
  
</form>
        </div>
    );
}

export default Formulaire;