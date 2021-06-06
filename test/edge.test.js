import getImageFormats from '../out.js'

const notCompatibleVersions = {
  avif: false,
  jpegxl: false
}

const compatibleVersions = {
  png: true,
  jpg: true,
  gif: true,
  svg: true
}

const ieVersions = {
  12: {
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246',
    imageFormats: {
      ...notCompatibleVersions,
      ...compatibleVersions,
      webp: false
    }
  },
  17: {
    userAgent:
      'Mozilla/5.0 (X11) AppleWebKit/62.41 (KHTML, like Gecko) Edge/17.10859 Safari/452.6',
    imageFormats: {
      ...notCompatibleVersions,
      ...compatibleVersions,
      webp: false
    }
  },
  18: {
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.19577',
    imageFormats: {
      ...notCompatibleVersions,
      ...compatibleVersions,
      webp: true
    }
  },
  46: {
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 14_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 EdgiOS/46.3.13 Mobile/15E148 Safari/605.1.15',
    imageFormats: {
      ...notCompatibleVersions,
      ...compatibleVersions,
      webp: true
    }
  },
  91: {
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36 Edg/91.0.864.37',
    imageFormats: {
      ...notCompatibleVersions,
      ...compatibleVersions,
      webp: true
    }
  }
}

Object.keys(ieVersions).forEach(version => {
  test(`Edge ${version}`, () => {
    const {imageFormats: expectedImageFormats, userAgent} = ieVersions[version]
    const imageFormats = getImageFormats(userAgent)

    expect(imageFormats).toEqual(expectedImageFormats)
  })
})
