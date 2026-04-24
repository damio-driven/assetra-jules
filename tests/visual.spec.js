import { test, expect } from '@playwright/test';

test('capture screenshots and test mobile menu', async ({ page }) => {
    await page.goto('http://localhost:5173');

    // Test desktop transitions
    const languages = ['it', 'en'];
    const themes = ['light', 'dark'];

    for (const lang of languages) {
        for (const theme of themes) {
            await page.evaluate(({ lang, theme }) => {
                localStorage.setItem('lang', lang);
                localStorage.setItem('theme', theme);
                location.reload();
            }, { lang, theme });
            await page.waitForLoadState('networkidle');
            await page.screenshot({ path: `screenshots/${lang}-${theme}-v2.png`, fullPage: true });
        }
    }

    // Test Mobile Menu
    await page.setViewportSize({ width: 375, height: 667 });
    await page.reload();

    const menuButton = page.locator('#mobile-menu-button');
    const mobileMenu = page.locator('#mobile-menu');

    await expect(mobileMenu).toBeHidden();
    await menuButton.click();
    await expect(mobileMenu).toBeVisible();
    await page.screenshot({ path: 'screenshots/mobile-menu-open.png' });

    await menuButton.click();
    await expect(mobileMenu).toBeHidden();
});
