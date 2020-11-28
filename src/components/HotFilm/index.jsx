import React from 'react'
import './style.scss'
function HotFilm(props) {
    const {films,title} = props;
    console.log(films);
    return (
        <div className="topFilm">
            <p className="topFilm__title">{title}</p>
            <ul>
                {
                    films.map((item)=>
                    <li key={item.id}>
                        <a>
                            <img src={item.image}/>
                            <div className="topFilm__item__info">
                                <p>{item.viName}</p>
                                <p>{item.engName}</p>
                                <div className="topFilm__item__info__vote">
                                    <i class="fas fa-star"></i>
                                    <span>{item.averageVote}</span>
                                </div>
                            </div>
                        </a>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default HotFilm
