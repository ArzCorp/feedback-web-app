import { useReplies } from 'hooks/useReplies'

import styles from 'styles/components/comment.module.css'

import Comment from './Comment'

export default function CommentDetail({ isLastComment, comment, commentId }) {
	const { replies, newReply } = useReplies({ commentId })
	const lastCommentStyles = isLastComment ? styles.lastComment : ''

	return (
		<article className={`${styles.commentContainer} ${lastCommentStyles}`}>
			<Comment
				message={comment}
				commentId={commentId}
				handleCreateReply={newReply}
			/>
			<div className={styles.repliesContainer}>
				{replies.map((reply) => (
					<Comment
						key={reply.id}
						message={reply.message}
						commentId={commentId}
						handleCreateReply={newReply}
					/>
				))}
			</div>
		</article>
	)
}
