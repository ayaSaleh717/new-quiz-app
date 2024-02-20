import './Navbar.css'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
 

  return (


    <nav className="zh-nav">
    <input type='checkbox' id='check'/>
      <label for='check' className='checkbtn'>
      <FontAwesomeIcon
      icon={faBars}
    />
    
      </label>
      <label className='logo'>Rob.<span>Quiz</span></label>
      <ul className='zh-nav-elements'>
        <li><Link href='/' className='active'>الصفحة الرئيسية</Link></li>
        <li><Link href='/'>الفئات</Link></li>
        <li><Link href='/'>الاختبارات الاكثر لعب</Link></li>
        <li><Link href='/' className='zh-login-btn'>تسجيل دخول</Link></li>
      </ul>
    </nav>
  )
}
