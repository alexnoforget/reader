export const setCookie = ({
  domain = '.localhost:3000',
  exdays,
  name,
  value,
}) => {
  const date = new Date()
  date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000))
  const expires = `expires=${date.toUTCString()}`
  document.cookie = `${name}=${value};${expires};path=/;${domain}`
}

export const removeCookie = (name, domain = '.localhost:3000') => {
  const expires = 'expires=Thu, 01 Jan 1970 00:00:01 GMT'
  document.cookie = `${name}=;${expires};path=/;${domain}`
}

export const getCookie = (name) => (
  decodeURIComponent(
    document.cookie.replace(
      new RegExp(`(?:(?:^|.*;)\\s*${name}*=*([^;]*).*$)|^.*$`),
      '$1',
    ),
  ) || false
)
