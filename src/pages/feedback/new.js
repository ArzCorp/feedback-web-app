import Button from 'components/Button'
import Layout from 'components/Layout'
import SelectInput from 'components/SelectInput'
import TextArea from 'components/Textarea'
import TextInput from 'components/TextInput'
import { useFeedbacks } from 'hooks/useFeedbacks'
import { useTags } from 'hooks/useTags'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from 'styles/pages/newFeedback.module.css'

export default function NewFeedbackPage() {
	const [values, setValues] = useState({})
	const { back } = useRouter()
	const { tags } = useTags()
	const { newFeedback } = useFeedbacks()

	const handleSubmit = (e) => {
		e.preventDefault()
		newFeedback({
			title: values.title,
			detail: values.detail,
			tag: values.tag,
		})
	}

	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		})
	}

	return (
		<Layout className={styles.layout}>
			<Button backTo="/desktop" variant="back">
				Regresar
			</Button>
			<form onSubmit={handleSubmit} className={styles.newFeedbackContainer}>
				<i className={`${styles.newFeedbackIcon} fa-solid fa-plus`}></i>
				<h1>Crear nuevo feedback</h1>
				<div className={styles.newFeedbackInput}>
					<h4>Titulo de feedback</h4>
					<h4 className={styles.newFeedbackSubtitle}>
						Añade un título breve y descriptivo.
					</h4>
					<TextInput name="title" handleChange={handleChange} />
				</div>
				<div className={styles.newFeedbackInput}>
					<h4>Categoria</h4>
					<h4 className={styles.newFeedbackSubtitle}>
						Elija una categoría para su feedback
					</h4>
					<SelectInput
						name="tag"
						options={tags}
						label="Categorias"
						handleSelectedChange={handleChange}
					/>
				</div>
				<div className={styles.newFeedbackInput}>
					<h4>Detalle del feedback</h4>
					<h4 className={styles.newFeedbackSubtitle}>
						Incluya cualquier comentario específico sobre lo que se debe
						mejorar, agregar, etc.
					</h4>
					<TextArea name="detail" handleChange={handleChange} />
				</div>
				<div className={styles.newFeedbackButtons}>
					<Button variant="dark" type="button" handleClick={() => back()}>
						Cancelar
					</Button>
					<Button>Agregar</Button>
				</div>
			</form>
		</Layout>
	)
}
