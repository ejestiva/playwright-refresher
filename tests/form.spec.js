import {test, expect} from '@playwright/test'
import {FormPage} from '../pages/form.page.js'

test('Fill out form', async({page})=>{
    const formPage = new FormPage(page);

 const user = {
    name: 'Kai Sotto',
    email: 'kaisottogilas@gmail.com',
    currentAddress: 'Magarao',
    permanentAddress: 'Naga City'
 };
 
 // ACTIONS
 await formPage.gotoPage();
 await formPage.fillForm(user);
 await formPage.clickSubmit();

 // ASSERTIONS

await expect(formPage.output).toContainText('Kai Sotto');
await expect(formPage.output).toContainText('kaisottogilas@gmail.com');
await expect(formPage.output).toContainText('Magarao');
await expect(formPage.output).toContainText('Naga City');
})