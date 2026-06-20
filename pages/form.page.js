export class FormPage {
    constructor(page) {
        this.page = page;

        // LOCATORS
        this.name = page.getByRole('textbox', { name: 'Full Name' });
        this.email = page.getByRole('textbox',{ name: 'name@example.com' });
        this.currentAddress = page.getByRole('textbox',{name: 'Current Address'});
        this.permanentAddress = page.locator('#permanentAddress');
        this.submitButton = page.getByRole('button', {name: 'Submit'});
        this.output = page.locator('#output');
    }

    async gotoPage() {
        await this.page.goto('https://demoqa.com/text-box');
    }

    async fillForm(user)
    {
        await this.name.fill(user.name);
        await this.email.fill(user.email);
        await this.currentAddress.fill(user.currentAddress);
        await this.permanentAddress.fill(user.permanentAddress);
    }

    async clickSubmit()
    {
        await this.submitButton.click();
    }


}