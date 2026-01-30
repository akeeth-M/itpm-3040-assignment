const { test, expect } = require('@playwright/test');

test.describe('Thanglish to Tamil Translator Tests', () => {

  //  Positive Functional Test
  test('Pos_Fun_0001 - Convert a simple statement', async ({ page }) => {
    await page.goto('https://tamil.changathi.com/');

    const textarea = page.locator('textarea');

    await textarea.type('naan veetukku poren ');
    // space is IMPORTANT

    await page.waitForTimeout(2000);

    const value = await textarea.inputValue();
    expect(value).toContain('நான்');
  });

  // ❌ Negative Functional Test (Punctuation not normalized)
test('Neg_Fun_0004 - Excessive punctuation is not normalized', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const textarea = page.locator('textarea');

  await textarea.type('nee enna pannura??? ');

  await page.waitForTimeout(2000);

  const value = await textarea.inputValue();

  // System converts words but fails to normalize punctuation
  expect(value).toContain('???');
});


  //  UI Positive Test
  test('Pos_UI_0001 - Output updates after space key press', async ({ page }) => {
    await page.goto('https://tamil.changathi.com/');

    const textarea = page.locator('textarea');

    await textarea.type('naan ');
    //  space triggers conversion

    await page.waitForTimeout(1500);

    const value = await textarea.inputValue();
    expect(value).toContain('நான்');
  });

});
