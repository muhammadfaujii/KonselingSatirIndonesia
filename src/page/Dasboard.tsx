

const Dasboard = () => {
    return(
        <div className="ml-80 -mt-[37rem]">
            <div className="leading-8">
                 <h2 className="text-['Poppins'] font-[700] text-[20px] text-[#355353] ml-[90px]">Dasboard</h2>
                 <p className="text-[#355353] text-[15px] text-['Poppins'] font-[500] ml-[90px]">Welcome Back, John,Doe</p>
            </div>
            <div className="flex">
                <div className="bg-white w-52 h-40 rounded shadow ml-24 mt-9 leading-3">
                    <h2 className="text-[#355353] text-[12px] font-[500] py-5 ml-5">User</h2>
                    <h2 className="text-[20px] font-[700] ml-5">1367</h2>
                </div>
                <div className="bg-white w-52 h-40 rounded shadow ml-24 mt-9 leading-3">
                    <h2 className="text-[#355353] text-[12px] font-[500] py-5 ml-5">Revenue</h2>
                    <h2 className="text-[20px] font-[700] ml-5">1367</h2>
                </div>
                <div className="bg-white w-52 h-40 rounded shadow ml-24 mt-9 leading-3">
                    <h2 className="text-[#355353] text-[12px] font-[500] py-5 ml-5">Consultations</h2>
                    <h2 className="text-[20px] font-[700] ml-5">1367</h2>
                </div>
            </div>
        </div>
    )
}

export default Dasboard;