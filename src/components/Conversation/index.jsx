import React, { useEffect, useRef, useState } from 'react'
import './style.scss'
import {storage} from '../../fireBase'
import icons, {checkIcon} from './icons'

function Conversation() {
    const [imageUrl,setImageUrl] = useState([])
    const imageUploadedRef = useRef([])
    const [currentChats,setCurrentChat] = useState([])
    const popupRef = useRef()
    const inputValueRef = useRef()

    const renderIcon = () => {
        let rowNumbers = Math.ceil(icons.length / 8)
        let tbodyArr = []
        let id = 0
        for (let i = 0; i < rowNumbers; i++) {
            let arr= []
            for (let y = 0; y < 8; y++) {
                let iconImg = React.createElement(
                    'img',
                    {
                        id:id,
                        onClick:onClickIcon,
                        src: icons[id].url
                    })
                let td = React.createElement('td',{key:id},iconImg)
                arr.push(td)
                id++
            }
            let tr = React.createElement('tr',{key:id},arr)
            tbodyArr.push(tr)
        }
        let tbody = React.createElement('tbody',null,tbodyArr)
        return tbody
    }
    const handleOnchange = (e)=>{
        console.log(e.target.files[0]);
        if(e.target.files[0]!==undefined){
            console.log('zoday');
            imageUploadedRef.current.push(e.target.files[0])
            e.target.files = null
            console.log(imageUploadedRef.current);
            imageUploadedRef.current.forEach(
                (item) => {
                    setImageUrl([...imageUrl,URL.createObjectURL(item)])
                }
            )
        }
    }
    const createChat = (data,image=false)=>{
       if(image){
        return <div className="conversation__chatBox__item__inner">
                    <div className="conversation__chatBox__item__inner__avatar">
                        <img src="https://icdn.dantri.com.vn/thumb_w/640/2019/06/23/ngo-duc-son-nam-than-truong-hoc-12-1561285685648.jpg" alt=""/>
                    </div>
                    <div className="conversation__chatBox__item__inner__info">
                        <div className="conversation__chatBox__item__inner__info__sender">Do Hai Nam</div>
                        <div className="conversation__chatBox__item__inner__info__img">
                            <img src={data} alt=""/>
                        </div>
                    </div>
                </div>
       }
       return <div className="conversation__chatBox__item__inner">
                <div className="conversation__chatBox__item__inner__avatar">
                    <img src="https://icdn.dantri.com.vn/thumb_w/640/2019/06/23/ngo-duc-son-nam-than-truong-hoc-12-1561285685648.jpg" alt=""/>
                </div>
                <div className="conversation__chatBox__item__inner__info">
                    <div className="conversation__chatBox__item__inner__info__sender">Do Hai Nam</div>
                    <div dangerouslySetInnerHTML={{__html: data}} className="conversation__chatBox__item__inner__info__content"></div>
                </div>
            </div>
    }
    const handleSubmit = (e)=>{
        let Arr = [...currentChats]
        e.preventDefault()
        if (imageUploadedRef.current.length > 0) {
            for (let i = 0; i < imageUploadedRef.current.length; i++) {
                const uploadTask = storage.ref(`images/${imageUploadedRef.current[i].name}`).put(imageUploadedRef.current[i])
                uploadTask.on(
                    "state_changed",
                    snapshot => { },
                    err => {
                        console.log(err)
                    },
                    () => {
                        storage
                            .ref("images")
                            .child(imageUploadedRef.current[i].name)
                            .getDownloadURL()
                            .then(url => {
                                Arr.push(createChat(url, true))
                            })
                            .then(()=>{
                                setTimeout(()=>{
                                    if (i === imageUploadedRef.current.length - 1) {
                                        console.log('zo day');
                                        imageUploadedRef.current = []
                                        setImageUrl([])
                                    }
                                    setCurrentChat(Arr)
                                },1000)
                            })
                    }
                )
            }
        }
        if(e.target.inputText.value.trim()!== ''){
            let data = e.target.inputText.value;
            let check = checkIcon(data)
            if(check){
                console.log(check);
                for (let x of check ) {
                    data = data.split(x.syntax).join(`<span><img src="${x.url}"></span>`);
                }
            }
            console.log(data);
            Arr.push(createChat(data))
            setCurrentChat(Arr)
        }

        e.target.inputText.value = ''
        
    }
    const handleClick = (e,index)=>{
        if(e.target.id === 'removeUploadImg'){
            let a = [...imageUrl]
            a.splice(index,1)
            imageUploadedRef.current.splice(index,1)
            setImageUrl(a)
        }
        else if(e.target.id === 'input-file'){
            e.target.value = null
        }
        else{
            popupRef.current.classList.toggle('visiblePopup')
        }
    }

    const onClickIcon = (e)=>{
        inputValueRef.current.value += icons[parseInt(e.target.id)]["syntax"]
        inputValueRef.current.focus()
    }
    
    useEffect(()=>{
        // console.log(currentChats)
        // console.log(imageUrl);
    },[currentChats,imageUrl])
    return (
        <div className="conversation">
            <div className="conversation__title">Conversation</div>
            <div className="conversation__chatBox">
               {
                   currentChats.map((item,index)=>
                    <div className="conversation__chatBox__item" key={index}>
                        {item}
                    </div>    
                    )
               }
            </div>
            <div className="conversation__inputChat">
                <div className="conversation__inputChat__imageUploaded">
                    {
                        imageUrl.length>0&& imageUrl.map((item,index)=>
                        <div key={index} className="conversation__inputChat__imageUploaded__item">
                                <i id="removeUploadImg" onClick={(e)=>{
                                    handleClick(e,index)
                                }} className="far fa-window-close"></i>
                                <img src={item} alt="" />
                        </div>
                        )
                    }
                </div>
                <form onSubmit={handleSubmit} className="conversation__inputChat__form">
                    <input autoComplete="off" ref={inputValueRef} name="inputText" placeholder="Type your text here" type="text"/>
                    <label htmlFor="input-file"><i className="fas fa-image"></i></label>
                    <input onClick={handleClick} onChange={handleOnchange} style={{
                        display:"none"
                    }} id="input-file" type="file"/>
                    <div className="conversation__inputChat__form__icon" onClick={handleClick}>
                        <div ref={popupRef} className="popupIconChat">
                            <table>
                                
                                    {
                                       renderIcon()
                                    }
                                    
                                
                            </table>
                        </div>
                        <i id="icon" className="fas fa-smile"></i>
                    </div>
                </form>
            </div>   
        </div>
    )
}

export default Conversation
