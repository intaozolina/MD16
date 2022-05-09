import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getEpisode, Episode } from '../../Data/EpisodesData';
import './episode.scss';

const EpisodePage = () => {
  const [currentEpisode, setCurrentEpisode] = useState<Episode>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const episode = getEpisode(Number(id));
    if (episode) {
      setCurrentEpisode(episode);
    } else {
      navigate('/episodes');
    }
  }, []);

  return (
    <div className="episode__hero">
      <div className="row center-xs">
        <div className="col-xs-12">
          <h1 className="episode_heading">{currentEpisode?.name}</h1>
          <div className="row center-xs">
            <div className="col-xs-6">
              <div className="episode__card">
                <span>
                  Episode Id:&nbsp;
                  {currentEpisode?.id}
                </span>
                <span>
                  Episodes Season:&nbsp;
                  {currentEpisode?.episode}
                </span>
                <span>
                  In this episode you can see
                  {' '}
                  {currentEpisode?.characters.length}
                  {' '}
                  characters
                </span>
                <span>
                  First time released on
                  {' '}
                  {currentEpisode?.air_date}
                </span>
                <button
                  className="episode__btn-back"
                  onClick={() => { navigate('/episodes'); }}
                >
                  Back to Episodes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default EpisodePage;
