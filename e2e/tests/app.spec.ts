const jestExpect = require("expect");

describe("Example", () => {
  beforeAll(async () => {
    await device.launchApp({
      permissions: { camera: "YES", microphone: "YES", photos: "YES" },
    });
  });

  it("should increment the Like count when the Like button is pressed", async () => {
    await waitFor(element(by.id("0/likeCounter")))
      .toBeVisible()
      .withTimeout(5000);

    let attributes = await element(by.id("0/likeCounter")).getAttributes();
    const preTapLikeCount = parseFloat(attributes.text.split(" ")[0]);
    await element(by.id("0/likeButton")).tap();
    attributes = await element(by.id("0/likeCounter")).getAttributes();
    const postTapLikeCount = parseFloat(attributes.text.split(" ")[0]);
    jestExpect(postTapLikeCount).toBe(preTapLikeCount + 1);
  });
});
