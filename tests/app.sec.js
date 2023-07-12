const { test, expect } = require('@playwright/test');
let page;

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000');
});

test('should render markdown preview', async () => {
  const markdown = '## Test Markdown';
  await page.fill('textarea', markdown);
  await page.waitForSelector('h2');
  const preview = await page.$eval('h2', (el) => el.textContent);
  expect(preview).toBe('Test Markdown');
});

test('should update markdown preview on input change', async () => {
  const markdown = '## Test Markdown';
  await page.fill('textarea', markdown);
  await page.waitForSelector('h2');
  const preview = await page.$eval('h2', (el) => el.textContent);
  expect(preview).toBe('Test Markdown');

  const newMarkdown = '### Updated Markdown';
  await page.fill('textarea', newMarkdown);
  await page.waitForSelector('h3');
  const updatedPreview = await page.$eval('h3', (el) => el.textContent);
  expect(updatedPreview).toBe('Updated Markdown');
});