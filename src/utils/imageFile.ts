import fs from 'fs';
import sharp from 'sharp';
import path from 'path';

const ImageFile = async (
  filename: string,
  width: number,
  height: number
): Promise<string> => {
  try {
    const filePath = path.join(__dirname, `../../images/full/${filename}.jpg`);

    const imgName = `${filename}_${width}_${height}.jpg`;

    const saveFile = path.join(__dirname, `../../images/temporary/${imgName}`);

    if (!fs.existsSync(filePath)) {
      return '';
    }

    if (!fs.existsSync(path.join(__dirname, '../../images/temporary'))) {
      fs.mkdirSync(path.join(__dirname, '../../images/temporary'));
    }

    if (!fs.existsSync(saveFile)) {
      await sharp(filePath)
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
