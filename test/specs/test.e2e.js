import { expect } from '@wdio/globals'
import SecurePage from '../pageobjects/secure.page.js'
import demoPage from '../pageobjects/demo.page.js';

describe('My application', () => {
    it('should submit form with all required fields', async () => {
        await demoPage.open();
        await demoPage.allMandatoryFieldsExceptRadio(1,2,3,5,6,7);
        await browser.pause(5000);
    })

    it('should submit form with all fields', async () => {
        await demoPage.open();
        await demoPage.allFieldsExceptRadio(7,60,5,4,3,2,1);
        await browser.pause(5000);
    })

    it('should update all fields', async () => {
        await demoPage.open();
        await demoPage.allFieldsDefaultValues(7,60,5,4,3,2,1);
        await browser.pause(5000);
    })


    it('should toggle based on social status', async () => {
        await demoPage.open();
        // await demoPage.allFieldsExceptRadio(7,60,5,4,3,2,1);
        await browser.pause(2000);
        await demoPage.toggleNo();
        await browser.pause(2000);
        await demoPage.toggleYes();
        await browser.pause(5000);
    })
})

