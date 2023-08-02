import { test, expect, type Page } from '@playwright/test';

const selectors = {
    addMechanicButton: "div.add",
    fullMechanicNameInput: "input[data-testid=mechanicName]",
    prefixInput: "input[data-testid=prefix]",
    phoneNumberInput: "input[data-testid=phoneNumber]" 
}

export class GarageResourcesPage{
    readonly page: Page;

    constructor(page: Page)
    {
        this.page = page;
    }
    
    async typeMechanicFullName(page: Page){
        
    }
}