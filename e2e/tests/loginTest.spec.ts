import { test, expect } from '@playwright/test';
import { selectors as SloginPage, actionsForLoginPage } from '../pageObject/loginPage.po';
import loginData from '../../fixtures/loginData.json';

test('login', async ({ page }) => {
  await page.goto('/');
  await actionsForLoginPage.login(loginData.login, loginData.password, page);
  await expect(page).toHaveURL(/schedule\/day-view/);
});

