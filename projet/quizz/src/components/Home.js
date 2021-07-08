import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
    const [email, setEmail] = useState('michael@xonatis.com');
    const history = useHistory();

    const handleChange = (event) => {
        setEmail(event.target.value)
    };

    const handleClick = (event) => {
        history.push('/question-1');
    }

    return (
        <div className="text-center">
            <div className="display-4 mb-4">
                <i className="fas fa-balance-scale-left"></i>
            </div>
            <h1>Quel type de développeur(se) êtes-vous ?</h1>
            <div className="form-group my-5">
                <label>Entrez votre email :</label>
                <input type="email" value={email} className="form-control text-center" onChange={handleChange} />
            </div>
            <button className="btn btn-success" onClick={handleClick}>Répondre au quizz <i className="fas fa-question-circle ml-1"></i></button>
        </div>
    );
}

export default Home;
