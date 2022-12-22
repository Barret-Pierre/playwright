import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.desmos.com/scientific?lang=fr");
});

test("2 X 2 return 4", async ({ page }) => {
  // Click the button digit 2.
  await page.getByRole("button", { name: "2" }).click();

  // Click the button multiplier.
  await page.getByRole("button", { name: "Multiplier" }).click();

  // Click the button digit 2.
  await page.getByRole("button", { name: "2" }).click();

  // Click the button enter.
  await page
    .getByRole("group", { name: "clavier" })
    .getByRole("button", { name: "Entrée" })
    .click();

  // Expect the result 4 appears in locator
  await expect(
    page.locator(".dcg-basic-expression-value .dcg-mq-digit")
  ).toContainText(/4/);
});
