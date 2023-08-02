import { test, expect } from '@playwright/test';
import { selectors as SloginPage, actionsForLoginPage } from '../pageObject/loginPage.po';

test('login', async ({ page }) => {
  await page.goto('/');
  await actionsForLoginPage.login("test@test.com", "P@ssw0rd", page);
  await page.goto('/schedule/day-view');
});

