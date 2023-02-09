import { includes } from "lodash"
import { WordContainer } from "./styled"

export const Word = ({ word, handleTranslate }) => {

	return (
		<WordContainer
			active
			newRow={includes(word, 'Chapter')}
			onClick={() => handleTranslate(word)}
		>
			{word}
		</WordContainer>
	)
}