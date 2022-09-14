import { useState } from 'react';
import './PlaySessionForm.css';
import * as playsessionAPI from '../../../utilities/playsessions-api'

export default function PlaySessionForm({ gameObjId, playSession, setPlaySession }) {
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        duration: "",
        notes: "",
    })
    const [error, setError] = useState("");

    function handleChange(evt) {
        const newFormData = { ...formData, [evt.target.name]: evt.target.value };
        setFormData(newFormData);
        setError("");
    }

    async function handleSubmit(evt) {
        // Prevent form from being submitted to the server
        evt.preventDefault();
        try {
          // The promise returned by the signUp service method 
          // will resolve to the user object included in the
          // payload of the JSON Web Token (JWT)
            const newPlaySession = await playsessionAPI.addSession(formData, gameObjId);
            newPlaySession.date = newPlaySession.date.split("T")[0]
            setPlaySession([...playSession, newPlaySession]);
            setFormData({
                date: "",
                time: "",
                duration: "",
                notes: "",
            });
            const sessionTab = new window.bootstrap.Tab(document.querySelector('#myTab button[data-bs-target="#playsessions"]'));
            sessionTab.show();
        } catch (err) {
            setError("Add Session Failed - Try Again");
        }
    }

    return (
        <div className="play-session-form-container">
            <form className="play-session-form" onSubmit={handleSubmit}>
                <input
                    type="Date"
                    name="date"
                    placeholder="Search..."
                    onChange={handleChange}
                    value={formData.date}
                    required
                />
                <input
                    type="text"
                    name="time"
                    onChange={handleChange}
                    value={formData.time}
                    placeholder="Enter start time..."
                />
                <input
                    type="number"
                    name="duration"
                    onChange={handleChange}
                    value={formData.duration}
                    placeholder="Enter how long you played for..."
                    required
                />
                <textarea
                    name="notes"
                    onChange={handleChange}
                    value={formData.notes}
                    placeholder="Enter any notes..."
                />
                <button type="submit">Add Play Session</button>
            </form>
            <p className="error-message">{error}</p>
        </div>
    );
}
