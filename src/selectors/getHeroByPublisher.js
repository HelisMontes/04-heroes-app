import { heroes } from "../data/data";

export const getHeroByPublisher = ( publisher ) => {
    const publishers = ['DC Comics', 'Marvel Comics']
    if ( !publishers.includes( publisher ) ){
        throw new Error(`Publisher "${ publisher }" no es correcto`);
    }
    return heroes.filter ( hero => hero.publisher === publisher );
}
