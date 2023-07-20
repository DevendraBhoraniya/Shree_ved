import React from 'react'


const Card = ({ name, degree, img, specialized }) => {
    return (
        <div className=" w-80 bg-[#EBEBEB] rounded-lg shadow-lg p-10 justify-center flex flex-col items-center">
            <img className="flex h-32 w-32  rounded-full shadow-lg items-center mb-2" src={img} alt="" />
            <div className="p-5">
                <h5 className="mb-2 text-xl font-bold  text-black">{name}</h5>
                <p className="mb-2 font-semibold text-[#5FCE55]">{degree}</p>
                <p className="mb-2 font-semibold text-[#7E7E7E]">{specialized}</p>
            </div>
        </div>
    );
};

const Team = () => {

    const data = [
        {
            name: "Dr. Umesh Detroja",
            degree: "B.A.M.S. & D.P.K.",
            img: "",
            specialized: "Ayurved Doctor",
        },
        {
            name: "Dr. Maitree Detroja",
            degree: "B.A.M.S.",
            img: "",
            specialized: "Ayurved Doctor",
        },
        {
            name: "Dr. Chirag Vidja",
            degree: "B.A.M.S. & M.D.",
            img: "",
            specialized: "Ayurved Doctor",
        },
    ];

    return (
        <>
            <div className="contain pt-12" id='team'>
                {/* Name */}
                <div className="text-4xl font-semibold ">Our <span className='text-[#5FCE55]' >Supporting</span> Team</div>
                <div className="h-px my-4  border-[2px] border-black" />
                {/* Team card */}
                <div className='md:my-24 my-12 flex flex-wrap md:flex-row gap-5 justify-center ' >
                    {data.map((data, index) => (
                        <Card key={index} name={data.name} img={data.img} degree={data.degree} specialized={data.specialized} />
                    ))}
                </div>
                {/* tag line */}
                <p className='flex md:text-3xl text-lg font-semibold text-[#5FCE55] justify-center italic underline  decoration-[#5FCE55]'>"Ayurveda: The ancient wisdom of healing"</p>
            </div>


        </>
    )
}

export default Team