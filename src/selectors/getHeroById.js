import { heroes } from "../data/data";

export const getHeroById = ( id ) => {
    const result = heroes.find( heroe => heroe.id === id )
    
    return !!result ? result : 'The hero not exist'
}