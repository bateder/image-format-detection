import parser from 'ua-parser-js'
import dictionary from './dictionary'

const defaultUserAgent =
  typeof window !== 'undefined' && window.navigator.userAgent

export function getImageFormats(userAgent = defaultUserAgent) {
  const ua = parser(userAgent)

  const {
    browser: {name, major: version}
  } = ua

  const compatibilities = Object.keys(dictionary[name]).reduce(
    (acc, format) => {
      const formatCompatibility = dictionary[name][format](version)
      return {
        ...acc,
        [format]: formatCompatibility
      }
    },
    {}
  )

  return compatibilities
}
