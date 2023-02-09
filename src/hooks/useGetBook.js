import { useEffect, useMemo, useState } from "react"
import split from "lodash/split"
import slice from 'lodash/slice'
import raw from '../source/dorian.txt'
import round from 'lodash/round'
import size from 'lodash/size'
import join from 'lodash/join'
import { getCookie, setCookie } from "../helpers/cookie"

const COUNT = 130
const EXT_DAYS = 9999
const LANGUAGES = [
  { id: 'en', text: 'Английский' },
  { id: 'ru', text: 'Русский' },
  { id: 'es', text: 'Испанский' },
]

export const useGetBook = () => {
  const [bookText, setBookText] = useState('')
  const [page, setPage] = useState(Number(getCookie('page')) || 1)
  const [targetLanguage, setTargetLanguage] = useState(getCookie('target_lang'))

  useEffect(() => {
    fetch(raw)
      .then((r) => r.text())
      .then(text => {
        const dotsSpace = join(split(text, '.'), '. ')
        setBookText(split(dotsSpace, ' '));
      })
  }, [])

  useEffect(() => {
    setCookie({
      extdays: EXT_DAYS,
      name: 'page',
      value: page,
    })
  }, [page])

  useEffect(() => {
    setCookie({
      extdays: EXT_DAYS,
      name: 'target_lang',
      value: targetLanguage,
    })
  }, [targetLanguage])

  const totalPages = useMemo(() => {
    return (round(size(bookText) / 130))
  }, [bookText])

  const nextPage = () => {
    setPage(page >= totalPages ? totalPages : page + 1)
  }

  const prevPage = () => {
    setPage(page === 1 ? 1 : page - 1)
  }

  const pageText = useMemo(() => {
    const start = COUNT * (page - 1)
    const end = COUNT * page
    const text = slice(bookText, start, end)

    return text
  }, [bookText, page])

  const setLanguage = (lang) => {
    setTargetLanguage(lang)
  }

  return {
    text: pageText,
    nextPage,
    prevPage,
    page,
    targetLanguage,
    totalPages,
    setLanguage,
    languages: LANGUAGES,
  }
}