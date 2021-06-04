import getImageFormats from '../src'

const ieVersions = {
  6: {
    userAgent:
      'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322)',
    imageFormats: {
      avif: false,
      webp: false,
      png: false,
      jpg: false,
      gif: false,
      svg: false
    }
  },
  7: {
    userAgent:
      'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; .NET CLR 1.1.4322)',
    imageFormats: {
      avif: false,
      webp: false,
      png: true,
      jpg: false,
      gif: false,
      svg: false
    }
  },
  8: {
    userAgent:
      'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)',
    imageFormats: {
      avif: false,
      webp: false,
      png: true,
      jpg: false,
      gif: true,
      svg: false
    }
  },
  9: {
    userAgent: 'Mozilla/4.0 (compatible; MSIE 9.0; Windows NT 6.1)',
    imageFormats: {
      avif: false,
      webp: false,
      png: true,
      jpg: true,
      gif: true,
      svg: true
    }
  },
  10: {
    userAgent:
      'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)',
    imageFormats: {
      avif: false,
      webp: false,
      png: true,
      jpg: true,
      gif: true,
      svg: true
    }
  },
  11: {
    userAgent: 'Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko',
    imageFormats: {
      avif: false,
      webp: false,
      png: true,
      jpg: true,
      gif: true,
      svg: true
    }
  }
}

Object.keys(ieVersions).forEach(version => {
  test(`IE ${version}`, () => {
    const {imageFormats: expectedImageFormats, userAgent} = ieVersions[version]
    const imageFormats = getImageFormats(userAgent)

    expect(imageFormats).toEqual(expectedImageFormats)
  })
})
