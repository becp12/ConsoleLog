import { useState, useEffect} from 'react';
import './SearchForm.css';
import * as gamesAPI from '../../utilities/games-api';

export default function SearchForm({ games, setGames }) {
    const [formData, setFormData] = useState({
        search: ""
    });

    async function updatedSearch(evt) {
        evt.preventDefault();
        const searchResult = await gamesAPI.search(formData.search)
        console.log(formData + "*****" + searchResult)
        setGames(searchResult);
    }

    function handleChange(evt) {
        const newFormData = {[evt.target.name]: evt.target.value}
        setFormData(newFormData);
        // updatedSearch(evt.target.value);
        console.log(formData)
    }

    return (
        <div className="search-form">
            <form onSubmit={updatedSearch}>
                <input
                    type="text"
                    name="search"
                    onChange={handleChange}
                    placeholder="Search..."
                    value={formData.search}
                />
                <button type='submit'>Search</button>
            </form>
        </div>
    );
}