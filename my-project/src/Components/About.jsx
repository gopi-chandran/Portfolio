import AboutImg from '../assets/about.jpg';

export default function About () {
    const config  = {
        line1: "Hello, I'm Gopi, a dedicated web developer with a passion for crafting seamless and visually appealing user experiences. With a strong foundation in frontend development, I'm actively seeking opportunities for both internships and full-time positions. My daily routine revolves around honing my skills through hands-on practice, tackling diverse projects, and continuously enhancing my problem-solving abilities. I thrive on creating elegant and functional websites that marry aesthetics with functionality. If you're looking for a motivated and adaptable web developer, I'm excited to bring my expertise to your team."
        
    }

    return <section className='flex flex-col py-20 ml-20 md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-2/9'>
        <div className='md:w-2/1 '  >
        <img className='rounded-full' src={AboutImg} />
        </div>
            
        </div>
        <div className='md:w-1/7 ml-20 flex justify-center'>
            <div className='flex flex-col justify-center text-black'>
                <h1 className='text-4xl border-primary mb-3 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5 text-2x1  '>{config.line1}</p>
                
            </div>
        </div>
    </section>
}
