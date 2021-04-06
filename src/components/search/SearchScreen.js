import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useForm } from '../../hook/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { useLocation } from 'react-router';
import { getHeroesByname } from '../../selectors/getHeroesByname';

export const SearchScreen = ({ history }) => {
    const location = useLocation();
    const { q = '' } = queryString.parse( location.search )
    const [{ search }, handleInputChange] = useForm({ 
        search: q
    });
    const handleSearch = ( e ) => {
        e.preventDefault();
        history.push(`?q=${ search }`);
    }
    const heroesFiltered = useMemo(() => getHeroesByname( q ), [q])
        getHeroesByname( search );
    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4> Search Form</h4>
                    <hr />
                    <form>
                        <div className="mb-3"> 
                            <input 
                                name="search"
                                type="text"
                                placeholder="Find your hero"
                                className="form-control"
                                value={ search }
                                onChange={ handleInputChange }
                                autoComplete="off"
                            />
                        </div>
                        <button 
                            type="submit"
                            className="btn btn-outline-primary btn-block"
                            onClick = { handleSearch }
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    { 
                        (q ==='') 
                            && 
                            <div className="alert alert-info">
                                Search a hero
                            </div>
                    }
                    { 
                        (q !=='' && heroesFiltered.length === 0 ) 
                            && 
                            <div className="alert alert-danger">
                                There is no a hero with { q }
                            </div>
                    }
                    {
                        heroesFiltered.map (hero => 
                            < HeroCard key={ hero.id } heroes={ hero } />
                        )
                    }
                </div>
            </div>
        </div>
    )
}
