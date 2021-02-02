import { by, device, element, expect, waitFor } from "detox";

describe("Example", () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should increment the Like count when the Like button is pressed", async () => {
    await waitFor(element(by.id("cardStatsCounter")))
      .toBeVisible()
      .withTimeout(5000);
    await expect(element(by.id("likeCounter"))).toBeVisible();
  });
});
