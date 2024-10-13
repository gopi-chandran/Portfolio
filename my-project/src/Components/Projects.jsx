import foodcartImg from "../assets/food-cart.jpg"
import passwordImg from "../assets/password.jpg"
import quizImg from "../assets/quiz.jpg"
import calendarImg from "../assets/calendar.jpg"


export default function Projects() {

    const config = {
        projects : [
            {
                image: foodcartImg ,
                description: 'Food-Cart Website ',
                link: 'https://food-cart-project.web.app/'
            },
            {
                image: passwordImg,
                description: 'Password Generator Website',
                link: 'https://strong-password-project.web.app/'
            },
            {
                image: quizImg,
                description: 'Quiz Website',
                link: 'https://simple-quiz-app-project.web.app/'
            },
            {
                image: calendarImg,
                description: 'Its a basic Calendar, and its my first project',
                link: 'https://monthly-sheet-calendar.firebaseapp.com/'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-white text-black">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl text-black  mb-5 w-[150px] font-bold">Projects</h1>
                <p className="text-black font-bold">These are some of my projects. I have built these with React.js and Tailwind CSS </p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank color-green-500' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}