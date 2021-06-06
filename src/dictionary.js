const dictionary = {
  IE: {
    avif: () => false,
    gif: version => version >= 8,
    jpegxl: () => false,
    jpg: version => version >= 9,
    png: version => version >= 7,
    svg: version => version >= 9,
    webp: () => false
  },
  Edge: {
    avif: () => false,
    gif: () => true,
    jpegxl: () => false,
    jpg: () => true,
    png: () => true,
    svg: () => true,
    webp: version => version >= 18
  }
}

export default dictionary
