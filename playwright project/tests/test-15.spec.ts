import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api ehema  yanne  naee.');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  
  await page.getByText('අපි එහෙම යන්නෙ නෑ').click();
});