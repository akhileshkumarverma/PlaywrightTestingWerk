import { test, expect } from '@playwright/test';
import { actionsForLoginPage } from '../pageObject/loginPage.po';
import loginData from '../../fixtures/loginData.json';

test('should add and delete new mechanic', async ({ page }) => {
  await page.goto('/');
  await actionsForLoginPage.login(loginData.login, loginData.password, page);
  await expect(page).toHaveURL(/schedule\/day-view/);
});