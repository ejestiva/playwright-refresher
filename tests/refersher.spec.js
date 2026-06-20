import {test, expect} from '@playwright/test'

test('First Automation Test', async({page})=>{
 await page.goto('https://automationexercise.com/');

await expect(page).toHaveTitle('Automation Exercise');

await expect(page.getByRole('link', { name: 'Signup / Login' })).toBeVisible();

})