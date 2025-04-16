import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostCard from '../components/Home/PostCard';
import { GetAllPosts } from '../redux/postSlice';

const Home = () => {
    const { posts, postsState, localPosts } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetAllPosts());
    }, [dispatch]);

    const allPosts = [...localPosts, ...posts];
    console.log("all",allPosts)

    return (
        <div className='w-full min-h-screen bg-blogWhite mt-12'>
            <div className='w-full min-h-screen flex flex-wrap gap-4 justify-center p-6'>
                {allPosts?.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
                <div className='w-72 h-[300px] bg-gray-200 rounded-3xl'></div>
            </div>
        </div>
    );
};
export default Home