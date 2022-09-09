import { useState } from 'react';
import './PlaySessionForm.css';

export default function PlaySessionForm() {
    const [formData, setFormData] = useState({})

    return (
        <div className="play-session-form-container">
            {/* // need to add onSubmit={} to form */}
            <form className="play-session-form">
                <input
                    type="Date"
                    name="date"
                    placeholder="Search..."
                    // onChange={}
                    // value={}
                    required
                />
                <input
                    type="text"
                    name="time"
                    placeholder="Enter start time..."
                />
                <input
                    type="number"
                    name="duration"
                    placeholder="Enter how long you played for..."
                />
                <textarea
                    name="notes"
                    placeholder="Enter any notes..."
                />
                <button type='submit'>Add Play Session</button>
            </form>
        </div>
    );
}
