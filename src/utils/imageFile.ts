import fs from 'fs'
import sharp from 'sharp'

const ImageFile = async (fileName: string, width: number, height: number): Promise<string> => {
  const url = `../UdacityImage/images/${fileName}.jpg`
  const imgName = `${fileName}_${width}_${height}.jpg`
  const saveFile = `../UdacityImage/images/temporary/${imgName}`

  if (!fs.existsSync(url)) {
    return ''
  }

  if (!fs.existsSync('../UdacityImage/temporary')) {
    fs.mkdirSync('../UdacityImage/temporary')
  }

  if (!fs.existsSync(saveFile)) {
    await sharp(url).resize({
      width,
      height
    }).toFile(saveFile)
  }
  return `
<div style="font-size: 20px; color: green">Resize Image Success</div>
<img src="../../images/temporary/${imgName}" alt="">
`
}

export default ImageFile
