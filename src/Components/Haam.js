import React from 'react'
import { Link } from 'react-router-dom'

import Logo from './../Images/logo.svg'
import Android from './../Images/android.svg'
import Ios from './../Images/ios.svg'

export default function Haam() {
    return (
        <div className="logo">
            <div>
                <Link to="/"><img src={Logo} alt="Haam app" /></Link>
                <ul>
                    <li><a href="https://play.google.com/store/apps/details?id=com.mamacgroup.ham&hl=en"><img src={ Android } alt="android" /></a></li>
                    <li><a href="https://apps.apple.com/in/app/%D9%87%D8%A7%D9%85-ham-%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85-%D8%B9%D8%A7%D8%AC%D9%84/id1300593156"><img src={ Ios } alt="android" /></a></li>
                </ul>
            </div>
        </div>
    )
}
