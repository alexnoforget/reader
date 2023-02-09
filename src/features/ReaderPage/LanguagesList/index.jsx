import OutsideClickHandler from 'react-outside-click-handler'

import map from 'lodash/map'
import find from 'lodash/find'

import { useDropdown } from '../../../hooks/useDropdown'

import {
  ListLanguagesBlock,
  Language,
  DropdownList,
  ListItem,
  LanguageBlock,
  CurrenLanguage,
} from "./styled"

export const LanguagesList = ({
  languages,
  setLanguage,
  targetLanguage,
}) => {
  const {
    toggle,
    closeList,
    open,
  } = useDropdown()

  const currentLang = find(languages, (lang) => lang.id === targetLanguage).text

  return (
    <ListLanguagesBlock>
      <OutsideClickHandler onOutsideClick={closeList}>
        <LanguageBlock>
          Язык перевода:
          <Language onClick={toggle}>
            <CurrenLanguage>
              {currentLang}
            </CurrenLanguage>
            {open && (
              <DropdownList>
                {map(languages, (lang) => {
                  return (
                    <ListItem
                      onClick={() => setLanguage(lang.id)}
                      key={lang.id}
                      checked={lang.id === targetLanguage}
                    >
                      {lang.text}
                    </ListItem>
                  )
                })}
              </DropdownList>
            )}
          </Language>
        </LanguageBlock>
      </OutsideClickHandler>
    </ListLanguagesBlock>
  )
}