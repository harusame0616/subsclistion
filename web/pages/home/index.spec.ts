import { test, expect } from '@playwright/test';

test.describe('サブスクリプション', () => {
  test.describe('サービス名', () => {
    test('サービス名が修正できる', async ({ page }) => {
      await page.goto('http://localhost:3000/home');

      const newServiceName = 'newServiceName';
      const serviceNameInputs = page.getByLabel('サービス名');
      const editTarget = serviceNameInputs.first();

      expect(await editTarget.inputValue()).not.toBe(newServiceName);
      await editTarget.fill(newServiceName);
      expect(await editTarget.inputValue()).toBe(newServiceName);
    });

    test('サービス名の修正をキャンセルするともとのサービス名になる', async ({
      page,
    }) => {
      await page.goto('http://localhost:3000/home');

      const serviceNameInputs = page.getByLabel('サービス名');
      const editTarget = serviceNameInputs.first();

      const originalServiceName = await editTarget.inputValue();
      await editTarget.click();
      await page.keyboard.type('input');
      expect(await editTarget.inputValue()).not.toBe(originalServiceName);
      await page.keyboard.press('Escape');
      expect(await editTarget.inputValue()).toBe(originalServiceName);
    });
  });

  test('サービス名更新後、修正をキャンセルすると更新後のサービス名になる', async ({
    page,
  }) => {
    await page.goto('http://localhost:3000/home');

    const serviceNameInputs = page.getByLabel('サービス名');
    const editTarget = serviceNameInputs.first();
    const originalServiceName = await editTarget.inputValue();

    const newServiceName = 'newServiceName';
    expect(await editTarget.inputValue()).not.toBe(newServiceName);
    await editTarget.fill(newServiceName);
    expect(await editTarget.inputValue()).toBe(newServiceName);

    await editTarget.click();
    await page.keyboard.type('input');
    expect(await editTarget.inputValue()).not.toBe(newServiceName);
    await page.keyboard.press('Escape');
    expect(await editTarget.inputValue()).toBe(originalServiceName);
  });
});
