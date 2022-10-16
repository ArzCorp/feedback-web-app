export const OPTIONS = [
	{
		key: 1,
		value: 'Más votado',
	},
	{
		key: 2,
		value: 'Más comentado',
	},
	{
		key: 3,
		value: 'Recientes',
	},
]

export const TAGS = [
	{
		id: 1,
		name: 'Feature',
	},
	{
		id: 2,
		name: 'Enhancement',
	},
	{
		id: 3,
		name: 'Bug',
	},
	{
		id: 4,
		name: 'UI',
	},
	{
		id: 5,
		name: 'UX',
	},
]

export const STATUS = [
	{
		id: 1,
		name: 'Pendiente',
		color: '#F49F85',
		task: 0,
	},
	{
		id: 2,
		name: 'En progreso',
		color: '#AD1FEA',
		task: 0,
	},
	{
		id: 3,
		name: 'Completado',
		color: '#62BCFA',
		task: 0,
	},
]

export const FEEDBACKS = [
	{
		id: 1,
		title: 'No funciona el boton de eliminar',
		comment: 'El boton de eliminar no funciona en pantallas de 330px',
		tag: 'Bug',
		status: 1,
		comments: [],
		ranking: 0,
	},
	{
		id: 2,
		title: 'Agregar padding a los botones',
		comment: 'Los botones no tienen padding bottom',
		tag: 'Feature',
		status: 1,
		comments: [],
		ranking: 0,
	},
]
