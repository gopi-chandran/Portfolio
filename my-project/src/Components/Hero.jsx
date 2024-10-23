import HeroImg from "../assets/hero.png";
import { AiOutlineLinkedin, AiOutlineMail, AiOutlineGithub,} from "react-icons/ai";

export default function Hero() {
    const config ={
        subtitle: "Im a Front-end Developer",
        social:{
            gmail:"https://mail.google.com/mail/u/1/#inbox?compose=new",
            linkedin: "https://www.linkedin.com/in/gopi05/",
            github: "https://github.com/gopi-chandran"
        }
    }
    return <section className="flex flex-col md:flex-row px-10 py-32 bg-white justify-center">
        <div className=" md:w-1/2 flex-col">
        <h1 className=" text-black text-6xl font-hero-font ">Hi, <br/> Im Gopi C <span></span> 
        <p className="text-2xl">{config.subtitle}</p>
        </h1>
        <div className="flex py-5">
        <a href={config.social.gmail} className="pr-5  hover:text-blue-900"><AiOutlineMail size={25}/></a>
            <a href={config.social.linkedin} className="pr-5   hover:text-blue-900"><AiOutlineLinkedin size={25}  /></a>
            <a href={config.social.github} className="pr-5   hover:text-blue-900"><AiOutlineGithub size={25}  /></a>
            
        </div>
        </div>
        
        <img className="md:w-1/6  rounded-xl" src={HeroImg}/>
        
    </section>
}
