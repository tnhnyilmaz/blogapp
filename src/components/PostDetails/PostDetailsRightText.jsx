import React from 'react'

const PostDetailsRightText = ({ selectedPost }) => {
    return (
        <div className='w-1/2 h-screen text-left overflow-y-auto pr-4'>
            <h1 className='text-3xl font-bold'>{selectedPost.title}</h1>
            <div className='py-3'></div>
            <div className='text-lg text-gray-700 max-h-[80vh] overflow-y-auto'>
                {selectedPost.content_text}
            </div>
        </div>
    )
}

export default PostDetailsRightText