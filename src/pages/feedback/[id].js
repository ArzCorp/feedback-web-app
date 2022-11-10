import Button from 'components/Button'
import Comment from 'components/Comment'
import FeedbackCard from 'components/FeedbackCard'
import Layout from 'components/Layout'
import TextArea from 'components/Textarea'
import { useFeedbacks } from 'hooks/useFeedbacks'
import { usePageLoaded } from 'hooks/usePageLoaded'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from 'styles/pages/comments.module.css'

const COMMENT_MAX_LENGTH = 250

export default function Comments() {
	const { isLoaded } = usePageLoaded()
	const { query } = useRouter()
	const { feedback } = useFeedbacks({ feedbackId: query.id })
	const [charactersRemaining, setCharactersRemaining] =
		useState(COMMENT_MAX_LENGTH)
	const commentsAmount = feedback.comments?.length

	return (
		<Layout>
			<header className={styles.commentsHeader}>
				<Button variant="back" backTo="/desktop">
					Regresar
				</Button>
				<Button goTo={`/feedback/edit/${query.id}`} variant="blue">
					Editar
				</Button>
			</header>
			{isLoaded ? <FeedbackCard readOnly feedback={feedback} /> : null}
			<div className={styles.commentsContainer}>
				<h3>{commentsAmount} Comentarios</h3>
				<div className={styles.commentsContainerList}>
					<Comment userId="1" />
					<Comment userId="1" />
				</div>
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
