import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
//   const [error, setError] = useState(false)

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits`,
          {
            params: {api_key: 'eda34bd8773f8b183adc5281f556f30c',},
          }
        );
        setCast(response.data.cast);
      } catch (error) {
        console.log('err-mov-cast')
      }
    };

    fetchMovieCast();
  }, [movieId]);

  const fetchActorPhoto = async (actorId) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/person/${actorId}`,
        {
          params: { api_key: 'eda34bd8773f8b183adc5281f556f30c' },
        }
      );
      return response.data.profile_path;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const [actorPhotos, setActorPhotos] = useState({});

  useEffect(() => {
    const fetchActorPhotos = async () => {
      const photos = {};
      for (const actor of cast) {
        const photo = await fetchActorPhoto(actor.id);
        photos[actor.id] = photo;
      }
      setActorPhotos(photos);
    };

    fetchActorPhotos();
  }, [cast]);

//   if (error) {
//     return <div>Error fetching movie cast.</div>;
//   }

  return (
    <div>
      <h2>Cast</h2>
      {cast.length === 0 ? (
        <div>No cast available.</div>
      ) : (
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${actorPhotos[actor.id]}`}
              alt={actor.name}
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
      )}
    </div>
  );
};

export default Cast;
