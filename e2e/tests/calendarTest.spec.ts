import { test, expect } from '@playwright/test';
import { actionsForLoginPage } from '../pageObject/loginPage.po';
import loginData from '../../fixtures/loginData.json';
import { CalendarPage } from '../pageObject/calendarPage.po';

test('should change to week view', async ({ page }) => {
    const testPage = new CalendarPage(page);
    await page.goto('/');
    await actionsForLoginPage.login(loginData.login, loginData.password, page);
    await expect(page).toHaveURL(/schedule\/day-view/);
    await testPage.switchToWeekView(page);
    await expect(page).toHaveURL(/schedule\/week-view/);
});

test('should change to workspaces view', async ({ page }) => {
    const testPage = new CalendarPage(page);
    await page.goto('/');
    await actionsForLoginPage.login(loginData.login, loginData.password, page);
    await expect(page).toHaveURL(/schedule\/day-view/);
    await testPage.switchToWorkspacesView(page);
    await expect(page).toHaveURL(/workspace/);
});