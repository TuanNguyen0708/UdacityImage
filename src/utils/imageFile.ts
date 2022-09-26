import fs from 'fs';
import sharp from 'sharp';

const ImageFile = async (
  filename: string,
  width: number,
  height: number
): Promise<string> => {
  try {
    const url = `../UdacityImage/images/full/${filename}.jpg`;
    const imgName = `${filename}_${width}_${height}.jpg`;
    const saveFile = `../UdacityImage/images/temporary/${imgName}`;

    if (!fs.existsSync(url)) {
      return '';
    }

    if (!fs.existsSync('../UdacityImage/images/temporary')) {
      fs.mkdirSync('../UdacityImage/images/temporary');
    }

    if (!fs.existsSync(saveFile)) {
      await sharp(url)
        .resize({
          width,
          height
        })
        .toFile(saveFile);
    }
    return `
<img src="../../images/temporary/${imgName}" alt="Image Resize">
`;
  } catch (e) {
    return 'Image can not process';
  }
};

export default ImageFile;
