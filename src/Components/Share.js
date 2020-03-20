import React from 'react'

import Facebook from './../Images/social-media/facebook.svg'
import Gmail from './../Images/social-media/gmail.svg'
import Twitter from './../Images/social-media/twitter.svg'
import Whatsapp from './../Images/social-media/whatsapp.svg'

export default function Share() {
    // let message = "https://wa.me/?text="+"\n"+"http://haamapp.com/corona"+"\n"+"عبر تطبيق هام"+"\n"+"http://haamapp.com/dowload/"
    let whatsappMessage = window.encodeURIComponent("https://haamapp.com/"+"\r\n"+"احصائيات باللغة العربية لانتشار كورونا نرجو نشر الرابط للفائدة 🔴🔴"+"\r\n\r\n"+"عبر تطبيق هام"+"\r\n"+"http://haamapp.com/download/")
    return (
        <div className="share">
            <ul>
                <li><a href="https://www.facebook.com/sharer/sharer.php?u=https://haamapp.com/"><img src={ Facebook } alt="Share Facebook" /></a></li>
                <li><a href="https://twitter.com/home?status=https://haamapp.com/"><img src={ Twitter } alt="Share Twitter" /></a></li>
                <li><a href={"whatsapp://send?text=" + whatsappMessage}><img src={ Whatsapp } alt="Share Whatsapp" /></a></li>
                <li><a href={"mailto:info@example.com?&subject=&body=" + whatsappMessage}><img src={ Gmail } alt="Share Gmail" /></a></li>
            </ul>
        </div>
    )
}
