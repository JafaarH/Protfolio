import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3, BiLogoTypescript } from "react-icons/bi";
import { BsGit, BsGithub } from "react-icons/bs";
import { FaReact, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import "../Page.css";

const Skils = () => {
    return (
        <div>
            <h3 style={{color: "rgb(1, 189, 252)"}}>My Skills :</h3>
            <div className="skillContainer">
              <div className="skillSpan">
            <AiFillHtml5 className="skillHtml" />
            <h6>HTML</h6>
              </div>
              <div className="skillSpan2">
              <BiLogoCss3 className="skillCss" />
              <h6>CSS</h6>
              </div>
              <div className="skillSpan3">
              <SiJavascript className="skillJS" />
              <h6>JavaScript</h6>
              </div>
              <div className="skillSpan4">
              <FaReact className="skillReact" />
              <h6>React</h6>
              </div>
              <div className="skillSpan5">
              <FaBootstrap className="skillBootStrap" />
              <h6>Bootstrap</h6>
              </div>
              <div className="skillSpan6">
              <BiLogoTypescript className="skillTypeScript" />
              <h6>TypeScript</h6>
              </div>
              <div className="skillSpan7">
                <BsGit className="skillGit" />
                <h6>Git</h6>
              </div>
              <div className="skillSpan8">
                <BsGithub className="skillGitHub" />
                <h6>GitHub</h6>
              </div>
              <div className="skillSpan9">
                <FaNodeJs className="skillNode" />
                <h6>Node.js</h6>
              </div>
            </div>
        </div>
    )
}
export default Skils;