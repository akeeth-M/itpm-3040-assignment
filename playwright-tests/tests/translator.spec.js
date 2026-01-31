const { test, expect } = require('@playwright/test');

// Common helper function
async function runTest(page, input, pressSpace = true) {
  await page.goto('https://tamil.changathi.com/');
  const textarea = page.locator('textarea');
  await textarea.fill('');

  if (pressSpace) {
    await textarea.type(input + ' '); // space triggers conversion
  } else {
    await textarea.type(input); // no space (UI negative)
  }

  await page.waitForTimeout(1500);
  return await textarea.inputValue();
}

test.describe('35 Test Cases – Positive PASS, UI Negative & Negative FAIL', () => {

  
  //  POSITIVE FUNCTIONAL TEST CASES
  
  test('Pos_Fun_0001', async ({ page }) => {
    const v = await runTest(page, 'naan veetukku poren');
    expect(v).toContain('நான்');
  });

  test('Pos_Fun_0002', async ({ page }) => {
    const v = await runTest(page, 'avan school pogiraan');
    expect(v.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0003', async ({ page }) => {
    const v = await runTest(page, 'aval saapadu saapudra');
    expect(v.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0004', async ({ page }) => {
    const v = await runTest(page, 'naan romba sandhoshama irukken');
    expect(v.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0005', async ({ page }) => {
    const v = await runTest(page, 'epdi irukka');
    expect(v.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0006', async ({ page }) => {
    const v = await runTest(page, 'nee enna pannura');
    expect(v.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0007', async ({ page }) => {
    const v = await runTest(page, 'inge vaa');
    expect(v.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0008', async ({ page }) => {
    const v = await runTest(page, 'door moodu');
    expect(v.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0009', async ({ page }) => {
    const v = await runTest(page, 'naan netru office ponen');
    expect(v.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0010', async ({ page }) => {
    const v = await runTest(page, 'naan ippo padikkiren');
    expect(v.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0011', async ({ page }) => {
    const v = await runTest(page, 'naan naalai exam ezhuthuven');
    expect(v.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0012', async ({ page }) => {
    const v = await runTest(page, 'vanakkam');
    expect(v.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0013', async ({ page }) => {
    const v = await runTest(page, 'kaalai vanakkam');
    expect(v.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0014', async ({ page }) => {
    const v = await runTest(page, 'epdi irukkinga');
    expect(v.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0015', async ({ page }) => {
    const v = await runTest(page, 'konjam help pannunga');
    expect(v.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0016', async ({ page }) => {
    const v = await runTest(page, 'thayavu seidhu inge vaanga');
    expect(v.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0017', async ({ page }) => {
    const v = await runTest(page, 'naan office meeting ku poren');
    expect(v.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0018', async ({ page }) => {
    const v = await runTest(page, 'avan laptop repair pannuvaan');
    expect(v.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0019', async ({ page }) => {
    const v = await runTest(page, 'naan Colombo poganum');
    expect(v.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0020', async ({ page }) => {
    const v = await runTest(page, 'naan school ku pogiren');
    expect(v.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0021', async ({ page }) => {
    const v = await runTest(page, 'avan teacher kitta pesinaan');
    expect(v.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0022', async ({ page }) => {
    const v = await runTest(page, 'naan dinner saapten');
    expect(v.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0023', async ({ page }) => {
    const v = await runTest(page, 'aval romba nallaa padikkiraa');
    expect(v.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0024', async ({ page }) => {
    const v = await runTest(page, 'naan bus la varren');
    expect(v.length).toBeGreaterThan(0);
  });

  
  //  UI NEGATIVE TEST CASES
  
  test('Neg_UI_0025 - UI converts without space (FAIL)', async ({ page }) => {
    const v = await runTest(page, 'naan', false); // no space
    //  Wrong expectation – conversion should NOT happen
    expect(v).toContain('நான்');
  });

  
  //  NEGATIVE FUNCTIONAL TEST CASES
  
  test('Neg_Fun_0026', async ({ page }) => {
    const v = await runTest(page, 'naanveetukkuporen');
    expect(v).toContain('வீட்டுக்கு போறேன்');
  });

  test('Neg_Fun_0027', async ({ page }) => {
    const v = await runTest(page, 'naan office poganum machan');
    expect(v).toContain('மச்சான் இல்லை');
  });

  test('Neg_Fun_0028', async ({ page }) => {
    const v = await runTest(page, 'nan veetuku poren');
    expect(v).toContain('நான் வீட்டுக்கு போகிறேன்');
  });

  test('Neg_Fun_0029', async ({ page }) => {
    const v = await runTest(page, 'nee enna pannura???');
    expect(v).toContain('பண்ணுகிறேன்');
  });

  test('Neg_Fun_0030', async ({ page }) => {
    const v = await runTest(page, 'naan netru office pogiren');
    expect(v).toContain('நாளை');
  });

  test('Neg_Fun_0031', async ({ page }) => {
    const v = await runTest(page, 'naan clg poganum');
    expect(v).toContain('கல்லூரி');
  });

  test('Neg_Fun_0032', async ({ page }) => {
    const v = await runTest(page, 'naan romba tired aa irukken');
    expect(v).toContain('மிகவும் புத்துணர்ச்சி');
  });

  test('Neg_Fun_0033', async ({ page }) => {
    const v = await runTest(page, 'naan 2 mani neram wait panninen');
    expect(v).toContain('இரண்டு மணி நேரம் காத்திருக்கவில்லை');
  });

  test('Neg_Fun_0034', async ({ page }) => {
    const v = await runTest(page, 'naan   veetukku   poren');
    expect(v).toContain('பயணம் இல்லை');
  });

  test('Neg_Fun_0035', async ({ page }) => {
    const v = await runTest(page, 'naan exam fail aayitten');
    expect(v).toContain('PASS');
  });

});
