import React, { useEffect, useRef, useState } from 'react'
import { Redirect, useHistory, useParams } from 'react-router-dom'
import ListFilm from '../../components/ListFilm'
import ErrorPage from '../../components/ErrorPage'
import './style.scss'
function FilterFilm(props) {
    let { query } = useParams()
    const [genres, setGenres] = useState(null)
    const [country, setCountry] = useState(null)
    const [sort,setSort] = useState(null)
    const [year,setYear] = useState(null)
    const [err, setErr] = useState(false)
    useEffect(() => {
        let arrQuery = query.split('&')
        arrQuery.forEach((item)=>{
           let a = item.split('=')
           if(a[0] === 'country') setCountry(a[1])
           if(a[0] === 'genres') setGenres(a[1])
           if(a[0] === 'year') setYear(a[1])
           if(a[0] === 'sort') setSort(a[1])
        })
        console.log(arrQuery);
        return () => {
            console.log('removed');
            setCountry(null)
            setGenres(null)
            setYear(null)
            setSort(null)
        }
    }, [query])

    const handleOnchange = (e) => {
        if(e.target.name === 'genres'){
            setGenres(e.target.value)
        }
        if(e.target.name === 'country') setCountry(e.target.value)
        if(e.target.name === 'year') setYear(e.target.value)
    }
    useEffect(()=>{
        console.log(sort);
    },[sort])
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    return (
        <div className="filterFilm">
            {
                !err ?
                    <>
                        <div className="filterFilm__title">
                            <span>Phim Hanh Dong</span>
                            <i className="fas fa-caret-right"></i>
                        </div>
                        {
                             <div className="filterFilm__filter">
                                <form onSubmit={handleSubmit}>
                                    <select name="genres" onChange={handleOnchange} value={
                                        genres ? genres : "default"
                                    }>
                                        <option value="default" >Genres</option>
                                        <option value="action">Action</option>
                                        <option value="horror">Horror</option>
                                        <option value="science-fiction">Science Fiction</option>
                                        <option value="comedy">Comedy</option>
                                        <option value="drama">Drama</option>
                                        <option value="drama">Cartoon</option>
                                    </select>
                                    <select name="country" onChange={handleOnchange} value={(
                                        country ? country : "default"
                                    )}>
                                        <option value="default">Country</option>
                                        <option value="vietnam">Viet Nam</option>
                                        <option value="united-states">United States</option>
                                        <option value="China">China</option>
                                        <option value="korea">korea</option>
                                        <option value="japan">Japan</option>
                                        <option value="hongkong">Hong Kong</option>
                                        <option value="europe">Europe</option>
                                    </select>
                                    <select name="year" onChange={handleOnchange} value={(
                                        year ? year : "default"
                                    )}>
                                        <option value="default">Year</option>
                                        <option value="2020">2020</option>
                                        <option value="2019">2019</option>
                                        <option value="2018">2018</option>
                                        <option value="2017">2017</option>
                                        <option value="2016">2016</option>
                                        <option value="2015">2015</option>
                                        <option value="2014">2014</option>
                                    </select>
                                    <select name="sort" onChange={handleOnchange} value={(
                                        sort ? sort : "default"
                                    )}>
                                        <option value="default">Sort</option>
                                        <option value="votes">Votes</option>
                                        <option value="date-update">Date update</option>
                                    </select>
                                    <button type="submit">Filter Film</button>
                                </form>
                            </div> 
                        }
                        <div className="filterFilm__listFilm">
                            <ListFilm films={props.films} />
                        </div>
                    </>
                    : <ErrorPage />
            }
        </div>
    )
}

export default FilterFilm
