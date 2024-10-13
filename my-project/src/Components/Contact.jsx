export default function Contact() {
    const config = {
        email:" iamgopi1321@gmail.com"
    }
    return <section id="contact" className="flex flex-col text-white bg-scondary px-5">
        <div className=" flex flex-col items-center"> 
        <h1 className="text-4xl text-black border-[#2b2d77] mb-5 w-[135px] font-bold">Contact</h1>
        <p className="pb-5">If You want to discuss more in detail, please contact me</p>
        <p className="py-1 pb-5" ><span className="font-bold">Email :</span>{config.email}</p>
        </div>
            
       
    </section>
}