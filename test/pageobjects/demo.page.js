import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DemoPage extends Page {

    get inputCurrentAge () {
        return $('#current-age');
    }
    get inputRetirementAge () {
        return $('#retirement-age');
    }

    get inputCurrentIncome () {
        return $('#current-income');
    }

    get inputSpouseIncome () {
        return $('#spouse-income');
    }

    get inputCurrentTotalSavings () {
        return $('#current-total-savings');
    }

    get inputCurrentAnnualSavings () {
        return $('#current-annual-savings');
    }

    get inputSavingsIncreaseRate () {
        return $('#savings-increase-rate');
    }

    get inputYesSocialBenefits () {
        return $('#yes-social-benefits');
    }

    get inputNoSocialBenefits () {
        return $('#no-social-benefits');
    }

    get btnSubmit () {
        return $('button[data-tag-id="submit"]');
    }

    async allFieldsExceptRadio (currAge, retAge, currIncome, spouseIncome, currTotSav, currAnnSav, savingsIncRate, radio) {
        await this.inputCurrentAge.setValue(currAge);
        await this.inputRetirementAge.setValue(retAge);
        await this.inputCurrentIncome.click();
        await this.inputCurrentIncome.setValue(currIncome);
        (await this.inputSpouseIncome).click();
        await this.inputSpouseIncome.setValue(spouseIncome);
        await this.inputCurrentTotalSavings.click();
        await this.inputCurrentTotalSavings.setValue(currTotSav);
        await this.inputCurrentAnnualSavings.setValue(currAnnSav);
        await this.inputSavingsIncreaseRate.setValue(savingsIncRate);
        await this.btnSubmit.click();
    }

    async allFieldsDefaultValues (currAge, retAge, currIncome, spouseIncome, currTotSav, currAnnSav, savingsIncRate, radio) {
        await this.inputCurrentAge.setValue(currAge);
        await this.inputRetirementAge.setValue(retAge);
        await this.inputCurrentIncome.click();
        await this.inputCurrentIncome.setValue(currIncome);
        (await this.inputSpouseIncome).click();
        await this.inputSpouseIncome.setValue(spouseIncome);
        await this.inputCurrentTotalSavings.click();
        await this.inputCurrentTotalSavings.setValue(currTotSav);
        await this.inputCurrentAnnualSavings.setValue(currAnnSav);
        await this.inputSavingsIncreaseRate.setValue(savingsIncRate);
    }

    async allMandatoryFieldsExceptRadio (currAge, retAge, currIncome, currTotSav, currAnnSav, savingsIncRate, radio) {
        await this.inputCurrentAge.setValue(currAge);
        await this.inputRetirementAge.setValue(retAge);
        await this.inputCurrentIncome.click();
        await this.inputCurrentIncome.setValue(currIncome);
        await this.inputCurrentTotalSavings.click();
        await this.inputCurrentTotalSavings.setValue(currTotSav);
        await this.inputCurrentAnnualSavings.setValue(currAnnSav);
        await this.inputSavingsIncreaseRate.setValue(savingsIncRate);
        await this.btnSubmit.click();
    }

    async toggleYes() {
        (await this.inputYesSocialBenefits).isFocused;
        (await this.inputYesSocialBenefits).click();
    }

    async toggleNo() {
        (await this.inputNoSocialBenefits).isFocused;
        (await this.inputNoSocialBenefits).click;
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

export default new DemoPage();
