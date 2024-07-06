import Table from 'cli-table3'

export const base_url = 'https://api.github.com'

export const truncateText = (text: string | null, maxLength = 30): string => {
	if (!text) return 'No description'
	return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text
}

export const displayTable = (data: TableData): void => {
	const head = Object.keys(data)
	const rows = [Object.values(data)]

	const table = new Table({
		head,
		style: {
			head: ['cyan'],
		},
	})

	table.push(...rows)

	console.log(table.toString())
}
