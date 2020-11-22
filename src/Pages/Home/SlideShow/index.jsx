import React, { useEffect, useRef, useState } from 'react'
import './style.scss'
function SlideShow(props) {
    const { slides } = props; 
    const slideShowRef = useRef();
    let [count, setCount] = useState(0);
    let runSlideShowRef = useRef();
    let mouseOverXRef = useRef(0);

    useEffect(() => {
        slideShowRef.current.addEventListener('touchstart', (e)=>{
            mouseOverXRef = e.touches[0].clientX
        })
        slideShowRef.current.addEventListener('touchend',(e)=>{
            if(mouseOverXRef > e.changedTouches[0].clientX
                 && mouseOverXRef - e.changedTouches[0].clientX > 200) {
                    if(count < slides.length-1) setCount(count+1)  
                 }
            else if(mouseOverXRef < e.changedTouches[0].clientX
                && e.changedTouches[0].clientX - mouseOverXRef > 200) {
                    if(count > 0) setCount(count-1)
                }
        })
        runSlideShowRef = setInterval(() => {
            if (count >= slides.length - 1) {
                setCount(0)
            }
            else {
                setCount(count + 1)
            }
        }, 7000)
        return () => {
            clearInterval(runSlideShowRef)
        }
    },[count])

    const changeSlideImg = (index) => {
        slideShowRef.current.style.transform = `translateX(-${index * 100}%)`;
        setCount(index)
    }

    return (
        <div className="home__slideShow">
            <div ref={slideShowRef} style={{
                transform:`translateX(-${count * 100}%)`
            }} className="home__slideShow__container">
                {
                    slides.map((item) =>
                        <div key={item.id} className="home__slideShow__item">
                            <a href="#">
                                <img src={item.largeImg} alt={item.engName} />
                            </a>
                        </div>
                    )
                }
            </div>
            <div className="home-slideShow-dotButton">
                <ul>
                    {
                        slides.map((item, index) => {
                            return (
                                <li className={index} key={item.id}><button
                                    style={{
                                        backgroundColor: (count === index) ? 'red' : '#faf1f147'
                                    }}
                                    onClick={() => changeSlideImg(index)
                                    }></button></li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default SlideShow
