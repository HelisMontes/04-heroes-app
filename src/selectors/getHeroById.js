import { heroes } from "../data/data";

export const getHeroById = ( id ) => heroes.find( heroe => heroe.id === id )