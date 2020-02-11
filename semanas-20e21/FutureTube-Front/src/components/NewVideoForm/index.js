import React from 'react';
import MainButtonComponent from '../../components/MainButton';
import Logo from "../../components/Logo";
import { 
    NewVideoFormContainer, 
    CreateVideoText,
    InputVideoUrl,
    InputVideoTitle,
    InputVideoDescription, 
} from './styled';

const NewVideoForm = props => {
    const handleFieldChangeUrl = event => {
        props.handleFieldChangeUrl(event);
    };

    const handleFieldChangeTitle = event => {
        props.handleFieldChangeTitle(event);
    };

    const handleFieldChangeDescription = () => {
        props.handleFieldChangeDescription();
    };

    const handleSubmit = event => {
        props.handleSubmit(event);
    };

    return (
        <NewVideoFormContainer onSubmit={handleSubmit}>
            <Logo />
            <CreateVideoText>
                Criar Video
            </CreateVideoText>
            <InputVideoUrl
                required
                label="URL do Vídeo"
                placeholder="URL do vídeo"
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                    shrink: true
                }}
                onChange={handleFieldChangeUrl}
                name="url"
                type="url"
                value={props.url}
            />
            <InputVideoTitle
                required
                label="Título do vídeo"
                placeholder="Título"
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                    shrink: true
                }}
                onChange={handleFieldChangeTitle}
                name="title"
                type="title"
                value={props.title}
            />
            <InputVideoDescription
                required
                label="Descrição do vídeo"
                placeholder="Descrição do vídeo"
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                    shrink: true
                }}
                onChange={handleFieldChangeDescription}
                name="description"
                type="description"
                value={props.description}
            />
            <MainButtonComponent title="Criar Vídeo" type="submit" />
        </NewVideoFormContainer>
    );
};

export default NewVideoForm