import './PlaySessions.css';
import * as playsessionAPI from '../../../utilities/playsessions-api'

export default function PlaySessions({ playSession, game, setPlaySession }) {
  if (!playSession || playSession.length === 0) return <div>No Play Sessions yet</div>
  let idToShow = playSession.length !== game.playSession.length ? playSession.at(-1)._id : undefined;

  async function handleDelete(id, gameId) {
    const newPlaySessions = await playsessionAPI.removeSession(id, gameId);
    setPlaySession(newPlaySessions);
  }

  return (
    <div className="play-session-container">
      <div className="accordion" id="accordionExample">
        {[...playSession]
            .sort((a, b) => new Date(a.date) < new Date(b.date) ? 1 : -1 )
            .map((p, idx) => (
          <div className="accordion-item" key={idx}>
            <h2 className="accordion-header" id={`heading${p._id}`}>
              <button className={`accordion-button ${(idToShow === undefined ? idx === 0 : p._id === idToShow) ? "" : "collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${p._id}`}>
                {new Date(p.date)?.toLocaleDateString()}{p.time ? `, ${p.time}` : ""}{`, ${p.duration}`}{p.duration > 1 ? " hours" : " hour"}
              </button>
            </h2>
            <div id={`collapse${p._id}`} className={`accordion-collapse collapse ${(idToShow === undefined ? idx === 0 : p._id === idToShow) ? "show" : ""} notes-container`} data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>{p.notes ? p.notes : "No notes saved to this play session entry"}</p>
                <button onClick={() => handleDelete(p._id, game._id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}