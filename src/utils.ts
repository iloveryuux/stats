export const truncateText = (text: string, maxLength = 30) =>
	text.length > maxLength ? `${text.substring(0, maxLength)}...` : text
