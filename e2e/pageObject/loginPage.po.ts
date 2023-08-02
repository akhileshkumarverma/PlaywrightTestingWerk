import { test, expect, type Page } from '@playwright/test';

export const selectors = {
    loginInput: "input[data-testid=email]",
    passwordInput: "input[data-testid=password]",
    loginButton: "button[data-testid=logInButton]",
}

export const actionsForLoginPage = {
    
    login: async function loginToWerk8(login: string, password: string, page: Page){
        await page.locator(selectors.loginInput).fill(login);
        await page.locator(selectors.passwordInput).type(password);
        await page.locator(selectors.loginButton).click();
    }


}

