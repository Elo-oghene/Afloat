import Picture from '../assets/Picture.png'
import Wave from '../assets/Wave.png'
const Hero = () =>{
    return(
        <section className="w-full h-[calc(100%-56px)] relative">
            <div>
                <img src={Picture} alt="" />
            </div>
            <section className="mt-20 hidden lg:flex">
                <div className="">
                    <img src={Wave} alt="" />
                </div>
            </section>
            <section className="flex">
                <div className="hidden lg:flex flex-col wrapper text-[32px] text-left py-10 absolute top-60">
                    <div className="w-96 h-32 font-bold text-primary-100 leading-9">
                            Connect with the Currents of <span className="text-primary-200">Modern Waterways ways</span>
                    </div>
                    <div className="w-72 text-[12px]">Seamlessly register for an account and unlock a tidal wave of convenience for your travels across the waterways in Delta State.</div>
                </div>
                <form className="lg:absolute px-8 w-full lg:w-[500px] h-[500px] bg-white top-20 right-40 rounded-lg space-y-6">
                    <div className="flex flex-col lg:flex-row gap-6 pt-6">
                        <div className="px-3 py-2 rounded-lg border-2 font-medium text-sm">Book a seat</div>
                        <div className="px-3 py-2 rounded-lg border-2 font-medium text-sm">Charter a boat</div>
                        <div className="px-3 py-2 rounded-lg border-2 font-medium text-sm">My booking</div>
                    </div>
                    <div className="flex gap-6">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" />
                            <label>oneway</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" />
                            <label>Round Trip</label>
                        </div>
                    </div>

                    <div>
                        <label className="font-medium">Travelling from</label><br />
                        <select name="" id="" className="w-full px-3 py-3 outline-none rounded-lg border-2">
                            <option value="">Departure terminal</option>
                            <option value="">Departure terminal</option>
                            <option value="">Departure terminal</option>
                            <option value="">Departure terminal</option>
                            <option value="">Departure terminal</option>
                        </select>
                    </div>
                    <div>
                        <label className="font-medium">Travelling to</label><br />
                        <select name="" id="" className="w-full px-3 py-3 outline-none rounded-lg border-2">
                            <option value="">Arrival terminal</option>
                            <option value="">Arrival terminal</option>
                            <option value="">Arrival terminal</option>
                            <option value="">Arrival terminal</option>
                            <option value="">Arrival terminal</option>
                        </select>
                    </div>
                    <div className="w-full flex-row flex justify-between">
                        <div className="date-input">
                            <label className="date-label">Date</label><br />
                            <input type="date" className="w-full px-3 py-3 outline-none rounded-lg border-2" />
                        </div>
                        <div className="width: 50%;">
                            <label className="font-medium">Seats</label><br />
                            <select className="w-full px-16 py-3 outline-none rounded-lg border-2 flex items-start">
                                <option value="">1</option>
                            </select>
                        </div>
                    </div>
                    <button className="btn bg-primary-100 px-8 py-3 text-white">Search for a boat</button>
                </form>
            </section>
        </section>
        
    )
}

export default Hero