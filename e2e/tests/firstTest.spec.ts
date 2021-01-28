import { expect, device, element, by } from "detox";

describe("Example", () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have welcome screen", async () => {
    await expect(element(by.id("welcome"))).toBeVisible();
  });

  it("should show hello screen after tap", async () => {
    await element(by.id("button")).tap();
    await expect(element(by.text("Hello World!"))).toBeVisible();
    await element(by.text("OK")).tap();
  });

  it("should reverse text in text input", async () => {
    const input = "abcdefghijklmnopqrstuvwxyz";
    await element(by.id("textInput")).tap();
    await element(by.id("textInput")).typeText(input);
    await expect(element(by.id("reversedText"))).toHaveText(
      reverse("abcdefghijklmnopqrstuvwxyz"),
    );
  });
});

// Verify that we can use TypeScript constructs
function reverse(a?: string) {
  if (a) {
    return a
      .split("")
      .reverse()
      .join("");
  }
  return "";
}
