import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import ContextGlobal from '../common/ContextGlobal';

function Resultat() {
    const history = useHistory();
    const context = useContext(ContextGlobal);

    const handleClick = (event) => {
        const donneeAEnvoyer = {
            'email_de_la_presonne' : context.email
        };

        // POST https://xonatis.academy/react/api/persos
        fetch('https://xonatis.academy/react/api/persos', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(donneeAEnvoyer)
        }).then(response => response.json());

        history.push('/commencez');
    }

    const moyenne = (context.noteQuestion1 + context.noteQuestion2 + context.noteQuestion3) / 3.0;
    let profileDuDev = null;
    if (moyenne > 2.5) {
        profileDuDev = 'Frontend';
    } else {
        profileDuDev = 'Backend';
    }

    return (
        <div className="text-center">
            <div className="display-4 mb-5">
                <i className="fas fa-laptop-code"></i>
            </div>
            <h1>Résultat</h1>
            <p className="mt-5">Votre type de développement est :</p>
            <div className="alert alert-success">
                {context.email}
            </div>
            <div className="alert alert-success">
                {profileDuDev}
            </div>
            <button className="btn btn-primary" onClick={handleClick}><i className="fas fa-arrow-alt-circle-left mr-2"></i> Retour</button>
        </div>
    );
}

export default Resultat;