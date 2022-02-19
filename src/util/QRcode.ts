import {
  matrixType
} from './type';

class QRcode {
  static matrix(content: string): matrixType {
    console.log('this is qr code matrix');

    return [
      [1, 1],
      [0, 1]
    ];
  }

  static numberEncode(content: string) {
    const numberId = '0001';

    const split = this.group(content);
    const encodeContent = split.map(item => this.toBinary(item)).join('');
    const lengthBinary = this.toBinary(String(content.length));

    return numberId + lengthBinary + encodeContent;
  }

  private static group(str: string, subGroupLength: number = 3) {
    let index = 0;
    let newArray = [];

    while(index < str.length) {
      newArray.push(str.slice(index, index += subGroupLength));
    }

    return newArray;
  }

  private static toBinary(str: string) {
    const numberic = Number(str);
    const binaryStr = numberic.toString(2);

    console.log('binaryStr', binaryStr);

    return ('0000000000' + binaryStr).slice(-10);
  }
}

export default QRcode;