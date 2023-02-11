import { useGetBook } from "../../hooks/useGetBook";
import {
	CloseButton,
	ContentContainer,
	LoadBlock,
	NextPage,
	PrevPage,
	TextBlock,
	TranslateBlock,
	Wrapper,
	ButtonsBlock,
	PageNumber,
} from "./styled";
import map from "lodash/map";
import isEmpty from 'lodash/isEmpty'
import axios from "axios";

import { Word } from "../Word";
import { useState } from "react";
import { LanguagesList } from "./LanguagesList";

export const ReaderPage = () => {
	const [translate, setTranslate] = useState('')
	const [load, setLoad] = useState(false)

	const {
		text,
		nextPage,
		prevPage,
		page,
		targetLanguage,
		totalPages,
		languages,
		setLanguage,
	} = useGetBook()

	const handleTranslate = (text) => {
		setLoad(true)
		axios.post(`https://libretranslate.de/translate`, {
			q: text,
			source: 'en',
			target: targetLanguage,
		})
			.then((response) => {
				setTranslate(response.data.translatedText)
				setLoad(false)
			})
			.catch((error) => alert(error))
	}

	const closeTranslate = () => {
		setTranslate('')
	}

	return (
		<Wrapper>
			<LanguagesList
				languages={languages}
				setLanguage={setLanguage}
				targetLanguage={targetLanguage}
			/>
			<ButtonsBlock>
				<PrevPage onClick={prevPage}>Prev</PrevPage>
				<PageNumber>Страница: {page} из {totalPages}</PageNumber>
				<NextPage onClick={nextPage}>Next</NextPage>
			</ButtonsBlock>
			<ContentContainer>
				<TextBlock>
					{text && map(text, (word, i) => (
						<Word handleTranslate={handleTranslate} key={i} word={word} />
					))}
					{load && (
						<LoadBlock>
							Loading...
						</LoadBlock>
					)}
				</TextBlock>
			</ContentContainer>

			<TranslateBlock>
				{!isEmpty(translate) && (
					<>
						Перевод: {translate}
						<CloseButton onClick={closeTranslate}>
							Close
						</CloseButton>
					</>
				)}
			</TranslateBlock>

		</Wrapper >
	);
}

