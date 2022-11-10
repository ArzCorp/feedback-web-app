import Image from 'next/image'
import avatar from 'assets/avatar.jpg'
import styles from 'styles/components/comment.module.css'

export default function Comment({ userId }) {
	return (
		<article className={styles.commentContainer}>
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
						<h4 className={styles.commentUsername}>@{userId}</h4>
					</div>
					<p className={`${styles.commentReply} text-xs`}>Responder</p>
				</div>
				<p className="text-small">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
					atque quae incidunt quo totam officia aliquid veniam architecto ab
					eligendi, laboriosam sequi libero nam sapiente consequuntur harum
					quidem recusandae quaerat?
				</p>
			</div>
		</article>
	)
}
