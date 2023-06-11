

const User = () => {
    return(
       <div className="ml-80 -mt-[37rem]">
         <div className="text-[36px] font-bold text-['Poppins'] text-[#355353]">
            <h1>Users</h1>
         </div>
         <div className="flex justify-around">
            <div className="w-24 h-24 bg-white shadow rounded-lg mt-4">
                <h1 className="text-center text-['Poppins'] font-[500] text-[14px] text-[#355353] py-2">Total</h1>
                <h2 className="text-[#355353] text-[32px] font-[800] text-['Poppins'] text-center -py-2">1775</h2>
            </div>
            <div className="w-24 h-24 bg-white shadow rounded-lg mt-4">
                <h1 className="text-center text-['Poppins'] font-[500] text-[14px] text-[#355353] py-2">Online</h1>
                <h2 className="text-[#355353] text-[32px] font-[800] text-['Poppins'] text-center -py-2">75</h2>
            </div>
            <div className="w-24 h-24 bg-white shadow rounded-lg mt-4">
                <h1 className="text-center text-['Poppins'] font-[500] text-[14px] text-[#355353] py-2">Consultations</h1>
                <h2 className="text-[#355353] text-[32px] font-[800] text-['Poppins'] text-center -py-2">32</h2>
            </div>
            <div className="w-24 h-24 bg-white shadow rounded-lg mt-4">
                <h1 className="text-center text-['Poppins'] font-[500] text-[14px] text-[#355353] py-2">Register</h1>
                <h2 className="text-[#355353] text-[32px] font-[800] text-['Poppins'] text-center -py-2">10</h2>
            </div>
         </div>
        
         
         <div className="flex flex-col mt-20">
         <h2 className="text-['Poppins'] font-[700] text-[20px] text-[#355353] ml-[90px]">User Data</h2>
            <div className="overflow-x-auto text-center mt-5">
                    <div className="inline-block w-[60rem] py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                                <table className="min-w-[60rem] text-left text-sm font-light">
                                <thead className="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">ID</th>
                                        <th scope="col" className="px-6 py-4">Nama</th>
                                        <th scope="col" className="px-6 py-4">Email</th>
                                        <th scope="col" className="px-6 py-4">Password</th>
                                        <th scope="col" className="px-6 py-4">Kelas</th>
                                        <th scope="col" className="px-6 py-4">Last Login</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b dark:border-neutral-500">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">1345</td>
                                        <td className="whitespace-nowrap px-6 py-4">Amar Maruf</td>
                                        <td className="whitespace-nowrap px-6 py-4">amarmaruf@gmail.com</td>
                                        <td className="whitespace-nowrap px-6 py-4">1235</td>
                                        <td className="whitespace-nowrap px-6 py-4">Gen Z</td>
                                        <td className="whitespace-nowrap px-6 py-4">18/05/2023 19:00</td>
                                    </tr>
                                    <tr className="border-b dark:border-neutral-500">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">1345</td>
                                        <td className="whitespace-nowrap px-6 py-4">Amar Maruf</td>
                                        <td className="whitespace-nowrap px-6 py-4">amarmaruf@gmail.com</td>
                                        <td className="whitespace-nowrap px-6 py-4">1235</td>
                                        <td className="whitespace-nowrap px-6 py-4">Gen Z</td>
                                        <td className="whitespace-nowrap px-6 py-4">18/05/2023 19:00</td>
                                    </tr>
                                    <tr className="border-b dark:border-neutral-500">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">1345</td>
                                        <td className="whitespace-nowrap px-6 py-4">Amar Maruf</td>
                                        <td className="whitespace-nowrap px-6 py-4">amarmaruf@gmail.com</td>
                                        <td className="whitespace-nowrap px-6 py-4">1235</td>
                                        <td className="whitespace-nowrap px-6 py-4">Gen Z</td>
                                        <td className="whitespace-nowrap px-6 py-4">18/05/2023 19:00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
       </div>

    )
}

export default User;