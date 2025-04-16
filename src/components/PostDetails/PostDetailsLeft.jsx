import React from 'react';
import { IoPersonCircleOutline } from "react-icons/io5";

const PostDetailsLeft = ({ selectedPost, createdpost, updatedpost }) => {
    return (
        <div className='w-1/2 h-screen'>
            <img src={selectedPost.photo_url} alt="Görsel" className='w-full max-w-2xl my-4 rounded-xl' />
            <div className='text-left font-semibold flex items-center justify-around'>
                <div className='flex items-center   gap-3 flex-col '>
                    <div className='mt-5 w-12 h-12 rounded-full bg-blogBlue flex justify-center items-center text-5xl text-white'> <IoPersonCircleOutline /> </div>
                    <span className='text-xl font-semibold'>Tunahan Yılmaz</span>
                </div>

                <div className='flex flex-col gap-3'>
                    <span>Category</span>
                    <div className='p-2 w-14 text-xs items-center flex justify-center rounded-2xl bg-gradient-to-br from-blue2 to-blue4 text-blogWhite'>{selectedPost.category}</div>
                </div>

            </div>
        </div>
    )
}

export default PostDetailsLeft