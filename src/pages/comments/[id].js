import Button from 'components/Button'
import FeedbackCard from 'components/FeedbackCard'
import Layout from 'components/Layout'
import TextArea from 'components/Textarea'
import { useState } from 'react'
import styles from 'styles/pages/comments.module.css'

const COMMENT_MAX_LENGTH = 250

export default function Comments() {
	const [comments, setComments] = useState([])
	const [charactersRemaining, setCharactersRemaining] =
		useState(COMMENT_MAX_LENGTH)
	const commentsAmount = comments.length

	return (
		<Layout>
			<header className={styles.commentsHeader}>
				<Button variant="back" backTo="/desktop">
					Regresar
				</Button>
				<Button variant="blue">Editar</Button>
			</header>
			<FeedbackCard
				readOnly
				title="Add tags for solutions"
				subtitle="Easier to search for solutions based on a specific stack."
				tag="Enhancement"
			/>
			<div>
				<h3 className={styles.commentsContainer}>
					{commentsAmount} Comentarios
				</h3>
			</div>
			<div className={styles.commentsAddComment}>
				<h3>Agregar comentario</h3>
				<TextArea
					type="textarea"
					placeholder="Escribe tu comentario aquí"
					maxLength={250}
					handleChange={(e) => {
						setCharactersRemaining(COMMENT_MAX_LENGTH - e.target.value.length)
					}}
				/>
				<div className={styles.commentsAddCommentActions}>
					<p className="text-small">
						{charactersRemaining} Caracteres restantes
					</p>
					<Button>Enviar comentario</Button>
				</div>
			</div>
		</Layout>
	)
}
