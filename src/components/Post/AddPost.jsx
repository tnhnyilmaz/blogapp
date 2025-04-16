import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addLocalPost } from '../../redux/postSlice';
const AddPost = ({ setAddPost }) => {

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            id: uuidv4(),
            title,
            category,
            content_text: content,
            photo_url: photoUrl,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        };

        dispatch(addLocalPost(newPost));

        setAddPost(false);
        setTitle('');
        setCategory('');
        setContent('');
        setPhotoUrl('');
    };

    return (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex justify-center items-center z-40'>
            <div className='bg-white w-1/2 h-[70%] overflow-auto rounded-xl shadow-lg p-6 relative'>
                <button
                    onClick={() => setAddPost(false)}
                    className='absolute top-3 right-3 text-xl font-bold text-gray-600 hover:text-black'
                >
                    ×
                </button>
                <h2 className='text-2xl font-bold mb-4'>New Post


                </h2>

                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='border p-2 rounded-md'
                        required
                    />
                    <input
                        type="text"
                        placeholder="Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className='border p-2 rounded-md'
                        required
                    />
                    <textarea
                        placeholder="Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className='border p-2 rounded-md h-40 resize-none'
                        required
                    ></textarea>
                    <input
                        type="text"
                        placeholder="Photo URL"
                        value={photoUrl}
                        onChange={(e) => setPhotoUrl(e.target.value)}
                        className='border p-2 rounded-md'
                        required
                    />

                    <button
                        type="submit"
                        className='bg-gradient-to-bl from-blue2 to-blue4  text-white py-2 rounded-md hover:bg-blue-700 transition duration-200'
                    >
                        Create Post
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddPost