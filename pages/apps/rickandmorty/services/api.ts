import axios from "axios";
import { CharacterResponse } from "../models/api";

const endpoint = {
  characters: "https://rickandmortyapi.com/api/character",
  locations: "https://rickandmortyapi.com/api/location",
  episodes: "https://rickandmortyapi.com/api/episode",
};

export class Api {

    public static async getCharacters() {

        return await axios.get<CharacterResponse>(endpoint.characters);
    }

};
