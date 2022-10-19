import Button from 'components/Button'
import Layout from 'components/Layout'
import SelectInput from 'components/SelectInput'
import TextArea from 'components/Textarea'
import TextInput from 'components/TextInput'
import styles from 'styles/pages/newFeedback.module.css'
import { TAGS } from 'utils/mocks'

export default function NewFeedbackPage() {
	return (
		<Layout className={styles.layout}>
			<Button backTo="/desktop" variant="back">
				Regresar
			</Button>
			<div className={styles.newFeedbackContainer}>
				<i className={`${styles.newFeedbackIcon} fa-solid fa-plus`}></i>
				<h1>Crear nuevo feedback</h1>
				<div className={styles.newFeedbackInput}>
					<h4>Titulo de feedback</h4>
					<h4 className={styles.newFeedbackSubtitle}>
						Añade un título breve y descriptivo.
					</h4>
					<TextInput />
				</div>
				<div className={styles.newFeedbackInput}>
					<h4>Categoria</h4>
					<h4 className={styles.newFeedbackSubtitle}>
						Elija una categoría para su feedback
					</h4>
					<SelectInput options={TAGS} label="Categorias" />
				</div>
				<div className={styles.newFeedbackInput}>
					<h4>Detalle del feedback</h4>
					<h4 className={styles.newFeedbackSubtitle}>
						Incluya cualquier comentario específico sobre lo que se debe
						mejorar, agregar, etc.
					</h4>
					<TextArea />
				</div>
				<div className={styles.newFeedbackButtons}>
					<Button variant="dark">Cancelar</Button>
					<Button>Agregar</Button>
				</div>
			</div>
		</Layout>
	)
}
