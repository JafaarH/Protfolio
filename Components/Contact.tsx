import Link from "next/link";
import { AiFillFacebook, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import {RiTwitterXFill} from "react-icons/ri"
import "./Contact.css"

const Contact = () => {
    return (
        <div>
             <h3 style={{color: "rgb(1, 189, 252)"}}>Contact Me :</h3>
            <Link href="https://www.linkedin.com/in/jafaar-haddad-077873291/">
            <AiFillLinkedin className="linkedIn" />
            </Link>
            <Link href="https://www.instagram.com/jafar_h.h/">
            <AiOutlineInstagram className="insta"/>
            </Link>
            <Link href="https://www.facebook.com/jafar.haddad.92/">
            <AiFillFacebook className="face" />
            </Link>
            <Link href="https://twitter.com/JafarHaddad7">
            <RiTwitterXFill className="X" />
            </Link>
            <p>My gmail: jafaarhbusiness@gmail.com</p>
        </div>
    )
}
export default Contact;