import ImageFile from "../../utils/imageFile";

describe("TEST - success params", () => {
  it("success", async () => {
    const res = await ImageFile("city", 600, 600);
    expect(res).toEqual(
      ' <div style="font-size: 20px; color: green">Resize Image Success</div><img src="../../../images/temporary/city_600_600.jpg" alt="Image Resize">'
    );
  });
});

describe("TEST - error name file", () => {
  it("error", async () => {
    const res = await ImageFile("big_city_boy", 600, 600);
    expect(res).toEqual("");
  });
});
