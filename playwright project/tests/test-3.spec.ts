import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama heta upandina  uthsawayata enna hithan inne,haebaeyi una vaedi unoth mata enna vena ekak nae.');
  await page.getByLabel('Clear').click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama heta upandina  uthsavayata enna hithan inne,haebaeyi una vaedi unoth mata enna vena ekak nae.');
  await page.getByLabel('Clear').click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama heta upandhina  uthsavayata enna hithan inne,haebaeyi una vaedi unoth mata enna vena ekak nae.');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByText('මම හෙට උපන්දින උත්සවයට එන්න හිතන් ඉන්නේ,හැබැයි උන වැඩි උනොත් මට එන්න වෙන එකක් නැ').click();
});