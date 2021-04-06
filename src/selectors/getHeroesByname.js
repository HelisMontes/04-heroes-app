import { heroes } from "../data/data";

export const getHeroesByname = ( name = '' ) => {
    if (name === '') return []
    name = name.toLocaleLowerCase();
    return  heroes.filter( heroe => heroe.superhero.toLocaleLowerCase().includes(name) )
}
