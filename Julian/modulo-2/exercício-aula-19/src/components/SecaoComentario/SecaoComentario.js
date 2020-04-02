import React, {Component} from 'react'
import './SecaoComentario.css'

const SecaoComentario = (props) => {


	const onChangeComentario = () => {

	}

	return <div className={'comment-container'}>
		<input
			className={'input-comentario'}
			placeholder={'Comentário'}
			value={''}
			onChange={onChangeComentario}
		/>
		<button onClick={props.aoEnviar}>Enviar</button>
	</div>
}


export default SecaoComentario