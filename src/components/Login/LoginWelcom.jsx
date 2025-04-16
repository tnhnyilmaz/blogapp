import React from 'react'

const LoginWelcom = () => {
    return (

        <div className='hidden md:flex md:w-1/2 h-1/2 md:h-screen overflow-hidden relative justify-center items-center'>
            <div className="z-0 w-[700px] h-[700px] bg-gradient-to-bl opacity-80 blur-sm from-[#3b82f6] to-[#122e88] rounded-full absolute bottom-[-350px] left-[-100px] shadow-2xl"></div>

            <div className='z-10 relative flex flex-col justify-center items-center text-white text-center px-6'>

                <div className='font-extrabold text-2xl max-w-md'>
                    <h1 className='text-4xl mb-2'>Welcome</h1>
                    <p className='text-xl mb-2'>BlogApp</p>
                    <p className='text-sm font-light'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum incidunt itaque explicabo sapiente quae accusantium labore at tenetur blanditiis facilis debitis aut fugiat exercitationem quidem nam, optio sed aspernatur. Suscipit.
                    </p>
                </div>
                <img
                    src="https://png.pngtree.com/png-vector/20221014/ourmid/pngtree-video-bloggers-blogger-young-girl-png-image_6288256.png"
                    alt="Blogger"
                    className='w-72 mb-6'
                />


            </div>
        </div>
    )
}

export default LoginWelcom