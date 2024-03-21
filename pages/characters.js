import { useEffect } from "react";
import { useState } from "react";
import useSWR from "swr";

export default function Characters() {
  const {
    data: horoscope,
    error,
    isLoading,
  } = useSWR(`/api/horoscope/pisces?date=today`);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <h1>Pisces</h1>

      <ul>
        {JSON.stringify(horoscope.data.horoscope_data)}
        {/* {characters.map((character) => (
          <li key={character._id}>
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
          </li>
        ))} */}
      </ul>
    </div>
  );
}
// converting data into a string so it can be displayed on the page
