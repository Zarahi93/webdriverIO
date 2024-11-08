import { $ } from '@wdio/globals';

describe('Class Attribute test', () => {

it('Should click blue button and accept alert', async () => {
 
    await browser.url('http://uitestingplayground.com/');

    await $('[href="/classattr"]').click();
    expect(await $$('//h3[text()="Class Attribute"]').length).toBeGreaterThan(0);

    await $('//button[contains(@class,"btn-primary")]').click();

    await $('//button[contains(@class,"btn-primary")]').click();
    await browser.acceptAlert();

});
});