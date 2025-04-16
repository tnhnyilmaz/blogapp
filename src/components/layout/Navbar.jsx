import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddPost from '../Post/AddPost';

const Navbar = () => {
    const navigate = useNavigate();
    const [addPost, setAddPost] = useState(false);


    return (
        <>
            <nav className='fixed top-0 left-0 w-full h-16 bg-gradient-to-br from-[#60a5fa] to-[#1e3a8a] flex items-center justify-between px-8 z-50 shadow-md'>
                <div onClick={() => navigate("/home")} className='text-white font-bold text-2xl cursor-pointer'>
                    BlogApp
                </div>
                <div className='text-white font-bold text-md cursor-pointer flex gap-5'>
                    <span onClick={() => setAddPost(true)}>New Post</span>
                    <span onClick={()=>navigate("/")}>LogOut</span>
                </div>
            </nav>

            {/* Modal */}
            {addPost && ( <AddPost setAddPost={setAddPost} /> )}
        </>
    );
};

export default Navbar;
