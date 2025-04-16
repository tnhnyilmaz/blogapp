import dayjs from 'dayjs';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PostDetailsLeft from '../components/PostDetails/PostDetailsLeft';
import PostDetailsRightText from '../components/PostDetails/PostDetailsRightText';

const PostDetail = () => {
    const { id } = useParams();
    const { posts } = useSelector((state) => state.posts);

    
    const selectedPost = posts.find(post => post.id === Number(id));
    console.log("2",selectedPost)

    if (!selectedPost) return <div>Post bulunamadı.</div>;

    const createdpost = dayjs(selectedPost.created_at).locale('tr').format('D MMMM YYYY');
    const updatedpost = dayjs(selectedPost.updated_at).locale('tr').format('D MMMM YYYY');

    if (!selectedPost) return <div>Post bulunamadı.</div>;

    return (
        <div className='p-6 mt-12 flex items-center bg-blogWhite w-full h-full relative overflow-hidden'>
            
            <PostDetailsLeft selectedPost={selectedPost} createdpost={createdpost} updatedpost={updatedpost} />
            <PostDetailsRightText selectedPost={selectedPost} />
        </div>
    )
}

export default PostDetail