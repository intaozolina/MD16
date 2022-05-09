import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getEpisodes, Episode } from '../../Data/EpisodesData';
import './episodes.scss';

const EpisodesPage = () => {
  const [createdEpisodes, setCreatedEpisodes] = useState<Episode[]>([]);

  useEffect(() => {
    const episodes = getEpisodes();
    setCreatedEpisodes(episodes);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="episodes__hero">
      <div className="row">
        <div className="col-xs-12">
          <h1 className="episodes__heading">
            Episodes
          </h1>
          <div className="row middle-xs">
            {createdEpisodes && createdEpisodes.map((episode) => (
              <div className="col-xs-3">
                <div className="episodes__card">
                  <h3 className="episode__title">
                    {episode.name}
                  </h3>
                  <button
                    className="episodes__btn"
                    onClick={() => navigate(`/episodes/${episode.id}`)}
                  >
                    {' '}
                    See more...
                  </button>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodesPage;
