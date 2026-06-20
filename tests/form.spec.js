import {test, expect} from '@playwright/test'

test('Fill out form', async({page})=>{

 // LOCATORS
  const name = page.getByRole('textbox',{name: 'Full Name'})
  const email = page.getByRole('textbox',{name: 'name@example.com'})
  const currenntAddress =  page.getByRole('textbox',{name: 'Current Address'})
  const permanentAddress = page.locator('#permanentAddress')
  const submitButton = page.getByRole('button', {name: 'Submit'})
  const output = page.locator('#output')

 // ACTIONS
await page.goto('https://demoqa.com/text-box?');

await name.fill('Kai Sotto');
await email.fill('gilakaisotto@gmail.com');
await currenntAddress.fill('Magarao');
await permanentAddress.fill('Naga City');

await submitButton.click();

 // ASSERTIONS

await expect(output).toContainText('Kai Sotto');
await expect(output).toContainText('gilakaisotto@gmail.com');
await expect(output).toContainText('Magarao');
await expect(output).toContainText('Naga City');
})