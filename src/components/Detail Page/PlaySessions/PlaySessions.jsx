import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PlaySessions.css';
import * as playsessionAPI from '../../../utilities/playsessions-api'

export default function PlaySessions({ playSession, game, setPlaySession }) {
  const { gameId } = useParams();

  return (
    <div className="play-session-container">
      <h3>Play Session Component</h3>
      <div className="accordion" id="accordionExample">
        {game.playSession.map(p => (
          <div className="accordion-item">
            <h2 className="accordion-header" id={`heading${p._id}`}>
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${p._id}`}>
                {new Date(p.date).toLocaleDateString()}
              </button>
            </h2>
            <div id={`collapse${p._id}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                {p.notes}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}