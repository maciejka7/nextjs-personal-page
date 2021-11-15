import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CharacterData } from "./models/api";
import { Api } from "./services/api";
import styles from "./styles/spinner.module.css";

interface Props {}

const index = (props: Props) => {
  const [characters, setCharacters] = useState<CharacterData[] | []>([]);

  useEffect(() => {
    Api.getCharacters().then(({ data }) => {
      console.log(data.results);
      setTimeout(() => {
        setCharacters(data.results);
      }, 3000);
    });
  }, []);

  return (
    <div>
      <ul className="flex justify-center flex-wrap flex-col">
        {characters.length === 0 ? (
          <div className={styles.spinner} />
        ) : (
          characters.map((char: CharacterData) => (
            <div className="flex flex-row mb-4 rounded-lg border border-gray-300 shadow items-center">
              <Image
                src={char.image}
                alt={char.name}
                placeholder="blur"
                blurDataURL={char.image}
                width={100}
                height={100}
                className="mr-4 rounded-tl-lg rounded-bl-lg"
              />
              <div>
                <p className="ml-4"> {char.name} </p>
                <p className="ml-4"> {char.gender} </p>
                <p className="ml-4"> {char.status} </p>
                <p className="ml-4"> {char.type} </p>
                <p className="ml-4"> {char.origin.name} </p>
              </div>
            </div>
          ))
        )}
      </ul>
    </div>
  );
};

export default index;
