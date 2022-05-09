import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCharacters, Character } from '../../Data/CharactersData';
import './characters.scss';

const CharactersPage = () => {
  const [visibleCharacters, setVisibleCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const characters = getCharacters();
    setVisibleCharacters(characters);
  }, []);
  const navigate = useNavigate();

  return (
    <div className="characters__section">
      <div className="row middle-xs">
        <div className="col-xs-12">
          <h1 className="characters">
            Characters
          </h1>
        </div>
      </div>
      <div className="row middle-xs">

        {visibleCharacters && visibleCharacters.map((character) => (
          <div className="col-xs-3">
            <div className="characters__card">
              <img src={character.image} alt={character.name} />
              <h3 className="characters__name">{character.name}</h3>
              <button
                className="characters__btn-more"
                onClick={() => { navigate(`/characters/${character.id}`); }}
              >
                Read more...
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>

  );
};

export default CharactersPage;
