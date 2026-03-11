function Card({name, role, image}){
    return (
        <div className="flex flex-col items-center text-center">
            <div className="flex items-start gap-2">
                <img src={image} alt={name} className="w-56 h-72 object-cover rounded-md" />

                <span className="mt-10 -ml-8 rotate-90 text-xs tracking-widest font-semibold">
                    {role}
                </span>
            </div>
            <h2 className="mt-3 font-semibold text-lg">
                {name}
            </h2>
        </div>
    );
}

export default Card;