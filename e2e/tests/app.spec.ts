import { expect } from "detox";

describe("Example", () => {
  beforeEach(async () => {
    await device.launchApp({ permissions: { camera: 'YES', microphone: 'YES', photos: 'YES' } })
  });

  it("should increment the Like count when the Like button is pressed", async () => {
    await waitFor(element(by.id("0/cardStatsCounter")))
      .toBeVisible()
      .withTimeout(5000);
    await expect(element(by.id("0/likeCounter"))).toBeVisible();
  });
});
