import React, { useEffect, useRef, useState } from 'react'
import './style.scss'
function SlideShow(props) {
    const { slides } = props; 
    const slideShowRef = useRef();
    let [count, setCount] = useState(0);
    let runSlideShowRef = useRef();
    let mouseOverXRef = useRef(0);
    
    useEffect(() => {
        function handleStart(e){
            mouseOverXRef.current = e.touches[0].clientX
        }
        function handleEnd(e){
            if (mouseOverXRef.current > e.changedTouches[0].clientX
                && mouseOverXRef.current - e.changedTouches[0].clientX > 200) {
                console.log('right');
                if (count < slides.length - 1) setCount(count + 1);
                else if (count >= slides.length - 1) setCount(0)
            }
            else if (mouseOverXRef.current < e.changedTouches[0].clientX
                && e.changedTouches[0].clientX - mouseOverXRef.current > 200) {
                console.log('left');
                if (count > 0) setCount(count - 1)
                else if (count <= 0) setCount(slides.length - 1)
            }
        }
        let slide = slideShowRef.current
        slide.addEventListener('touchstart',handleStart,{passive: true})
        slide.addEventListener('touchend',handleEnd)
        runSlideShowRef.current = setInterval(() => {
            if (count >= slides.length - 1) {
                setCount(0)
            }
            else {
                setCount(count + 1)
            }
        }, 7000)
        return () => {
                slide.removeEventListener('touchstart',handleStart,{passive:true})
                slide.removeEventListener('touchend',handleEnd)
                clearInterval(runSlideShowRef.current)
        }
    },[count,slides.length])

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
