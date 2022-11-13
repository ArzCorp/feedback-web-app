import { useComments } from 'hooks/useComments'
import { useFeedbacks } from 'hooks/useFeedbacks'
import { usePageLoaded } from 'hooks/usePageLoaded'
import { useRouter } from 'next/router'
import { useState } from 'react'

import Button from 'components/Button'
import FeedbackCard from 'components/FeedbackCard'
import Layout from 'components/Layout'
import TextArea from 'components/Textarea'
import styles from 'styles/pages/comments.module.css'
import CommentDetail from 'components/CommentDetail'

const COMMENT_MAX_LENGTH = 250

export default function Comments() {
	const [comment, setComment] = useState('')
	const { isLoaded } = usePageLoaded()
	const { query } = useRouter()
	const { feedback } = useFeedbacks({ feedbackId: query.id })
	const { comments, newComment } = useComments({ feedbackId: query.id })
	const commentsAmount = comments.length

	const [charactersRemaining, setCharactersRemaining] =
		useState(COMMENT_MAX_LENGTH)

	return (
		<Layout>
			<header className={styles.commentsHeader}>
				<Button variant="back" url="/desktop">
					Regresar
				</Button>
				<Button url={`/feedback/edit/${query.id}`} variant="blue">
					Editar
				</Button>
			</header>
			{isLoaded ? <FeedbackCard readOnly feedback={feedback} /> : null}
			<div className={styles.commentsContainer}>
				<h3>{commentsAmount} Comentarios</h3>
				<div className={styles.commentsContainerList}>
					{comments.length > 0 ? (
						comments.map((comment, key) => (
							<CommentDetail
								key={comment.id}
								comment={comment.comment}
								commentId={comment.id}
								isLastComment={key + 1 === comments.length}
							/>
						))
					) : (
						<p className="text-small">No tienes comentarios aun</p>
					)}
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
						setComment(e.target.value)
					}}
				/>
				<div className={styles.commentsAddCommentActions}>
					<p className="text-small">
						{charactersRemaining} Caracteres restantes
					</p>
					<Button
						type="button"
						handleClick={() =>
							newComment({
								comment: comment,
							})
						}
					>
						Enviar comentario
					</Button>
				</div>
			</div>
		</Layout>
	)
}
