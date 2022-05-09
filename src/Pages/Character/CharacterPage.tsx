import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCharacter, Character } from '../../Data/CharactersData';
import './character.scss';

const CharacterPage = () => {
  const [currentCharacter, setCurrentCharacter] = useState<Character>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const character = getCharacter(Number(id));
    if (character) {
      setCurrentCharacter(character);
    } else {
      navigate('/characters');
    }
  });

  return (
    <div className="character__page" style={{ backgroundImage: ` url(${currentCharacter?.image})` }}>
      <div className="row">
        <div className="col-xs-12">
          <div className="character__description-card">
            <h1 className="character__name">
              Character Name:&nbsp;
              {currentCharacter?.name}
            </h1>
            <ul className="character__info">
              <li>
                Character type:&nbsp;
                {currentCharacter?.species}
              </li>
              <li>
                Character gender:&nbsp;
                {currentCharacter?.gender}
              </li>
              <li>
                Character location:&nbsp;
                {currentCharacter?.location.name !== 'unknown'
                  ? currentCharacter?.location.name
                  : `Location of ${currentCharacter.name} is not known`}
              </li>
              <li>
                Character status:&nbsp;
                {currentCharacter?.status !== 'unknown'
                  ? currentCharacter?.status
                  : `Status of ${currentCharacter.name} not known`}
              </li>
              <li>
                You can see this character in
                {' '}
                {currentCharacter?.episode.length}
                {' '}
                {currentCharacter?.episode.length === 1 ? 'episode' : 'episodes'}
                .
              </li>
            </ul>
            <button
              className="character__btn"
              onClick={() => { navigate('/characters'); }}
            >
              Back to Characters...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
