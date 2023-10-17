import Image from "next/image"
import imageGame from "../images/Screenshot (16).png"
import todo from "../images/Screenshot (14).png"
import Link from "next/link"
import "../Page.css";
import shoppingCart from "../images/Screenshot (18).png"
import workOut from "../images/Screenshot (21).png"
import ecommerce from "../images/Screenshot (22).png"

const Projects = () => {
    return (
        <div>
            <h3 style={{color: "rgb(1, 189, 252)"}}>My Projects :</h3>
            <div className="projectContainer">
              <div className="projectSubContainer">
              <Image src={todo} alt="todoPage" className="imagetodo" />
              <div className="arrangment">
              <h3 className="nameOfProject">Taskify</h3>
              <p style={{textAlign: "center", marginLeft: "7px"}}>Taskify is a todo web app helps the client to range his priorities and what duties does he/she has.</p>
              <div style={{display: "flex"}}>
                <div className="box">React</div>
                <div className="box">TypeScript</div>
              </div>
              <div style={{display: "flex"}}>
                <Link href="https://github.com/JafaarH/Taskify_Project" style={{textDecoration: "none"}}>
                <p className="codeAndLive">Code</p>
                </Link>
                <Link href="https://todopagehaddad.web.app/" style={{textDecoration: "none"}} >
                <p className="codeAndLive">Live demo</p>
                </Link>
              </div>
            </div>
              </div>
              </div>
              <div className="projectContainer">
                <div className="projectSubContainer">
                <Image src={ecommerce} alt="imageOfShop" className="imagetodo" />
                <div className="arrangment">
                <h3 className="nameOfProject">Haddad's Ecommerce</h3>
              <p style={{textAlign: "center", marginLeft: "7px"}}>Enjoy shopping at this beautiful ecommerce website which helps you find the product you need very easily.</p>
              <div style={{display: "flex"}}>
                <div className="box">React</div>
                <div className="box">TypeScript</div>
                <div className="box">BootStrap</div>
              </div>
              <div style={{display: "flex"}}>
                <Link href="https://github.com/JafaarH/Haddad-Ecommerce_website" style={{textDecoration: "none"}}>
                <p className="codeAndLive">Code</p>
                </Link>
                <Link href="https://ecommercehaddad-5248d.web.app/" style={{textDecoration: "none"}} >
                <p className="codeAndLive">Live demo</p>
                </Link>
              </div>
                </div>
                </div>
              </div>
              <div className="projectContainer">
                <div className="projectSubContainer">
                <Image src={workOut} alt="imageOfShop" className="imagetodo" />
                <div className="arrangment">
                <h3 className="nameOfProject">Gymnator</h3>
              <p style={{textAlign: "center", marginLeft: "7px"}}>Gymnator is a full gym web app that contains both fitness and body building sections, go there and achive your goal.</p>
              <div style={{display: "flex"}}>
                <div className="box">React</div>
                <div className="box">TypeScript</div>
                <div className="box">BootStrap</div>
              </div>
              <div style={{display: "flex"}}>
                <Link href="https://github.com/JafaarH/Workout_Website" style={{textDecoration: "none"}}>
                <p className="codeAndLive">Code</p>
                </Link>
                <Link href="https://workouthaddad.web.app/" style={{textDecoration: "none"}} >
                <p className="codeAndLive">Live demo</p>
                </Link>
              </div>
                </div>
                </div>
              </div>
              <div className="projectContainer">
                <div className="projectSubContainer">
                <Image src={shoppingCart} alt="imageOfShop" className="imagetodo" />
                <div className="arrangment">
                <h3 className="nameOfProject">Shopping Cart</h3>
              <p style={{textAlign: "center", marginLeft: "7px"}}>You can find some beautiful stuff with this beautiful shopping cart page, enjoy shopping.</p>
              <div style={{display: "flex"}}>
                <div className="box">React</div>
                <div className="box">TypeScript</div>
              </div>
              <div style={{display: "flex"}}>
                <Link href="https://github.com/JafaarH/Ecommerce_Project" style={{textDecoration: "none"}}>
                <p className="codeAndLive">Code</p>
                </Link>
                <Link href="https://haddadshoppingcart.web.app/" style={{textDecoration: "none"}} >
                <p className="codeAndLive">Live demo</p>
                </Link>
              </div>
                </div>
                </div>
              </div>
              <div className="projectContainer">
                <div className="projectSubContainer">
                <Image src={imageGame} alt="imageOfGame" className="imagetodo" />
                <div className="arrangment">
                <h3 className="nameOfProject">Tic Tac Toe</h3>
              <p style={{textAlign: "center", marginLeft: "7px"}}>Get some relief by playing this simple and nice game with your partner, enjoy!</p>
              <div style={{display: "flex"}}>
                <div className="box">React</div>
                <div className="box">TypeScript</div>
              </div>
              <div style={{display: "flex"}}>
                <Link href="https://github.com/JafaarH/TicTacToe-game" style={{textDecoration: "none"}}>
                <p className="codeAndLive">Code</p>
                </Link>
                <Link href="https://tictactoegame-f7c7e.web.app/" style={{textDecoration: "none"}} >
                <p className="codeAndLive">Live demo</p>
                </Link>
              </div>
                </div>
                </div>
              </div>
        </div>
    )
}
export default Projects;