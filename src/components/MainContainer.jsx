import Card from "./Cards"
import teamData from "../../data/teamData"

function MainContainer(){
    return(
        /* Desktop */
        <main className="px-6 py-12 bg-gray-200 text-black md:bg-[#0c1b33] md:text-white min-h-screen">
            <div className="max-w-6xl mx-auto mb-12 grid md:grid-cols-2 gap-6">
                <h1 className="text-4xl md:text-5xl font-bold">
                    The creative crew
                </h1>
                <div>
                    <h3 className="font-bold mb-2">
                        Who we are
                    </h3>
                    <p className="text-sm leading-relaxed">
                        We are team of creatively diverse, driven innovative individuals working in various locations from the world.
                    </p>
                </div>
            </div>
            {/* MOBILE */}

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {teamData.map((member,index)=>(
                    <div key={index} className={`${index ===1 || index ===4 ? "mt-20 sm:mt-20 md:mt-16" : ""}`}>
                        <Card
                        name={member.name}
                        role={member.role}
                        image={member.image}
                        />

                    </div>
                ))}
            </div>
        </main>
    )
}
export default MainContainer;