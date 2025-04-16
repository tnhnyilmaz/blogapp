import dayjs from 'dayjs';
import React from 'react';
import { IoPersonCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const PostCard = ({ post }) => {
    const formatted = dayjs(post.created_at).locale('tr').format('D MMMM YYYY');
    const navigate=useNavigate();
    return (
        <div onClick={() => navigate(`/post/${post.id}`)}
        className='w-96 h-96 bg-white rounded-3xl shadow-lg overflow-hidden'>
           
            <div className='h-40 w-full'>
                <img
                    src={post.photo_url}
                    alt="Post Görseli"
                    className='w-full h-full object-cover'
                />
            </div>
            <div className='p-4 text-left'>
                <span className='text-xs font-bold  bg-gradient-to-tl from-blue2 to-blue4 bg-clip-text text-transparent'>{post.category}</span>

                <h3 className='text-lg font-semibold mb-2 text-gray-800'>
                    {post.title}
                </h3>
                <p className='text-sm text-gray-600 line-clamp-3'>
                    {post.content_text}
                </p>

                <div className='flex items-center  gap-3 '>
                    <div className='mt-5 w-12 h-12 rounded-full bg-blogBlue flex justify-center items-center text-5xl text-white'> <IoPersonCircleOutline /> </div>
                    <div className='flex flex-col items-center '>
                        <span className='text-sm font-semibold'>Tunahan Yılmaz</span>
                        <span>
                            {formatted}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard