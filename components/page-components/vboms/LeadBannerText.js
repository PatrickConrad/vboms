import { useEffect, useState } from "react";

function LeadBannerText({styles}) {
    const [textAnimation, setTextAnimation] = useState(' ');
    const [textAnimation2, setTextAnimation2] = useState(' ');

    let startTime = .5
    const text = "Stop working for your business..."
    const text2 = "Start making your business work for you"


    const fadeIn = (txt)=> {
        let newText = '';
       for (let t = 0; t < txt.length; t++){
            setTimeout(()=>{
                newText = newText + txt[t];
                setTextAnimation(newText);               
            }, 3000)
        }    
    }

    const fadeIn2 = (txt)=> {
        let newText = ''
        for (let t = 0; t < txt.length; t++){
            setTimeout(()=>{
                newText = newText + txt[t];
                setTextAnimation2(newText);              
             }, 6000)
         }    
     }
    
    useEffect(()=>{
        fadeIn(text)
        fadeIn2(text2)
    }, [])
    return (
        <div className={styles.vboms.pages.home.leadBannerTextBox}>
            <div className={styles.vboms.pages.home.leadBannerText}>{textAnimation}</div>
            <div className={styles.vboms.pages.home.leadBannerText}>{textAnimation2}</div>
        </div>
    );
}

export default LeadBannerText;