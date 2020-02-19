import React, { useState } from 'react';
import { NewVideoWrapper } from './styled';
import NewVideoForm from '../../components/NewVideoForm';

const NewVideoPage = () => {
    const [url, setUrl] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleFieldChangeUrl = event => {
        setUrl(event.target.value);
    };

    const handleFieldChangeTitle = event => {
        setTitle(event.target.value);
    };

    const handleFieldChangeDescription = event => {
        setDescription(event.target.value);
    };
    
    const handleSubmit = event => {
        event.preventDefault();

    };

    return (
        <NewVideoWrapper>
            <NewVideoForm 
                handleSubmit={handleSubmit}
                handleFieldChangeUrl={handleFieldChangeUrl}
                handleFieldChangeTitle={handleFieldChangeTitle}
                handleFieldChangeDescription={handleFieldChangeDescription}
                url={url}
                title={title}
                description={description}
            />
        </NewVideoWrapper>
    );
};

export default NewVideoPage