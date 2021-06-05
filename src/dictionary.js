const dictionary = {
  IE: {
    avif: () => false,
    webp: () => false,
    png: version => version >= 7,
    jpg: version => version >= 9,
    jpegxl: () => false,
    gif: version => version >= 8,
    svg: version => version >= 9
  }
}

export default dictionary
