import Image from 'next/image'
import avatar from 'assets/avatar.jpg'
import styles from 'styles/components/comment.module.css'
import { useState } from 'react'
import TextArea from './Textarea'
import Button from './Button'
import { useReplies } from 'hooks/useReplies'

export default function Comment({ userId, comment, id, isLastComment }) {
	const lastCommentStyles = isLastComment ? styles.lastComment : ''
	const [toggleReply, setToggleReply] = useState(false)
	const { replies, newReply } = useReplies({ commentId: id })
	const [reply, setReply] = useState({})

	const renderComment = ({ user, message }) => {
		return (
			<div className={styles.commentView}>
				<figure className={styles.avatarImageContainer}>
					<Image
						className={styles.avatarImage}
						alt="Avatar"
						width={40}
						height={40}
						src={avatar}
					/>
				</figure>
				<div>
					<div className={styles.commentUserData}>
						<div>
							<h4>Usuario {user}</h4>
							<h4 className={styles.commentUsername}>@user{user}</h4>
						</div>
						<p
							className={`${styles.commentReply} text-xs`}
							onClick={() => setToggleReply(!toggleReply)}
						>
							Responder
						</p>
					</div>
					<p className="text-small">{message}</p>
				</div>
			</div>
		)
	}

	const sendNewReply = () => {
		newReply({
			...reply,
			commentId: id,
			userId: 1,
		})
	}

	return (
		<article className={`${styles.commentContainer} ${lastCommentStyles}`}>
			{renderComment({ user: userId, message: comment })}
			<div className={styles.repliesContainer}>
				{replies.map((reply) => renderComment(reply))}
			</div>
			{toggleReply ? (
				<div className={styles.replyContainer}>
					<TextArea
						handleChange={(e) => {
							setReply({ ...reply, message: e.target.value })
						}}
					/>
					<Button variant="purple" type="button" handleClick={sendNewReply}>
						Responder
					</Button>
				</div>
			) : null}
		</article>
	)
}
