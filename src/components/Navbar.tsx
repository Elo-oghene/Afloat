import { useState } from "react"

const Navbar = () =>{
    const[isopen,setIsOpen] = useState(false)

    const toggleOpen = ()=>{
        setIsOpen(!isopen)
    }
    return(
        <section>
            <section className="hidden wrapper w-full h-14 items-center lg:flex justify-between">
                <div className="w-32">
                    <img src="../public/Logo.svg" className="w-full" alt="" />
                </div>
                <ul className="flex gap-8 text-sm">
                <li>Services</li>
                <li>Safety</li>
                <li>About us</li>
                </ul>
                <div className="flex gap-4">
                    <button className="btn border-2 border-primary-100 text-sm px-6 text-primary-100">Login</button>
                    <button className="btn bg-primary-100 text-sm text-white">Get Started</button>
                </div>
            </section>
            {/* small screen */}
            
            <section className="lg:hidden w-full h-14 items-center flex  justify-between relative">
                <div className="w-32 p-4">
                    <img src="../public/Logo.svg" className="w-full" alt="" />
                </div>
                <div className={`w-full h-[calc(100vh-3.5rem)] top-[3.5rem] fixed z-10 bg-white p-4 transition-left duration-300 ease-in-out ${isopen ? 'left-0' : '-left-full'}`}>
                    <ul className="w-full h-full flex flex-col gap-4 text-sm">
                        <li>Services</li>
                        <li>Safety</li>
                        <li>About us</li>
                        <li>
                            <button className="btn border-2 border-primary-100 text-sm px-6 text-primary-100">Login</button>
                        </li>
                        <li>
                            <button className="btn bg-primary-100 text-sm text-white">Get Started</button>
                        </li>
                    </ul>
                </div>
                <i className={`${isopen ? 'bx bx-x' : 'bx bx-menu'} p-4`} onClick={toggleOpen}></i>
            </section>
        </section>
    )
}

export default Navbar