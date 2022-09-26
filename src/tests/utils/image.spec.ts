import ImageFile from '../../utils/imageFile';

describe('TEST - success params', () => {
  it('success', async () => {
    const res = await ImageFile('city', 600, 600);
    expect(res).toEqual(res);
  });
});

describe('TEST - error name file', () => {
  it('error', async () => {
    const res = await ImageFile('big_city_boy', 600, 600);
    expect(res).toEqual('');
  });
});
