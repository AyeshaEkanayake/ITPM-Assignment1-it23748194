import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('karunaakaralaa  theerum ganna.');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();

  await page.getByText('කරුනාකරලා තේරුම් ගන්න').click();
});