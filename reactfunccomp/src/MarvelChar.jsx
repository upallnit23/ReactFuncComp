import { useState, useEffect } from 'react';
import axios from 'axios';
import { string } from 'prop-types';

const MarvelCharList = () => {
    const [character, setCharacter]=useState([]);

    useEffect(() => {
        const fetchCharacters = async() => {
            try {
                const response = await axios.get('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=e161aabd3b7163c95940c4c1f54bfecc&hash=c8496b39878b1205026a39b66f58a39d');
                console.log(response.data);
                setCharacter(response.data);
            }catch (error) {
                console.error('Error fetching data', error)
            }
        }
        if (character) {
            fetchCharacters()
        }
    }, [name]);

    return (
        <div className="character-list">
            <h2 text-align="center">Marvel Characters</h2>
            <ul>
                {character.map(characters => (
                    <li key={character.name}>
                        (Description: {character.description}) 
                    </li>
                ))}
            </ul>
        </div>
    )
}
MarvelCharList.proptypes = {
    character: string
}

export default MarvelChar

   



