import { test, expect } from '@playwright/test';

test('Login should be successful', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/'); // ✅ Public test site
    await page.fill('#user-name', 'standard_user'); // Predefined username
    await page.fill('#password', 'secret_sauce');   // Predefined password
    await page.click('[data-test="login-button"]');

    // Validate login success
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
