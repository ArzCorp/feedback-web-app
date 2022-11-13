import { Fragment, useState } from 'react'

import styles from 'styles/components/comment.module.css'

import Image from 'next/image'
import avatar from 'assets/avatar.jpg'
import TextArea from './Textarea'
import Button from './Button'

export default function Comment({
	userId,
	message,
	commentId,
	handleCreateReply,
}) {
	const [toggleReply, setToggleReply] = useState(false)
	const [newMessage, setNewMessage] = useState({})

	return (
		<Fragment>
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
							<h4>Usuario {userId}</h4>
							<h4 className={styles.commentUsername}>@user{userId}</h4>
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
			{toggleReply ? (
				<div className={styles.replyContainer}>
					<TextArea
						handleChange={(e) => {
							setNewMessage(e.target.value)
						}}
					/>
					<Button
						variant="purple"
						type="button"
						handleClick={() => {
							handleCreateReply({
								message: newMessage,
								userId: 1,
								commentId,
							})
							setToggleReply(false)
						}}
					>
						Responder
					</Button>
				</div>
			) : null}
		</Fragment>
	)
}
