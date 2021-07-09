import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ContextGlobal from '../common/ContextGlobal';

function Question(props) {
    const [noteChoisi, setNoteChoisi] = useState(0);
    const history = useHistory();
    const context = useContext(ContextGlobal);

    const handleClick = (note) => (event) =>  {
        setNoteChoisi(note);
        context[props.champs] = note;
        history.push(props.suivant);
    }

    const buttons = [];
    for (let i = 1; i < 6; ++i) {
        buttons.push(
            <button className="btn btn-light mx-1" onClick={handleClick(i)}>{i}</button>
        )
    }

    return (
        <div className="text-center">
            <div className="display-4 mb-5">
                <i className="fas fa-question-circle"></i>
            </div>
            <p>
                {props.textAfficher}
            </p>
            <div className="mt-5">
                {buttons}
            </div>
        </div>
    );
}

export default Question;
