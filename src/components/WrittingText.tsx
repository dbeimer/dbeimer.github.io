import {React,useState,useEffect} from 'react'

type Props={text:string}

export default function WrittingText({text}:Props) {

    let [part,setTextPart]=useState('')
    let index=0


    useEffect(()=>{
        console.log('se ha ejecutado')
        let interval=setInterval(()=>{
            index++
            setTextPart(text.slice(0,index))
            if(index===text.length){
                clearInterval(interval)
                // setTimeout(()=>{},5000)
                index=0
            }
        },100)
    },[text])

    return (
        
        <span>{part}<b className="animate-ping">_</b></span>
    )
}