import { $ } from '@wdio/globals';

describe('Input test', () => {

const randomText = crypto.randomUUID();

it('Should put a rendom text on the input', async () => {
 
    await browser.url('http://uitestingplayground.com/');

    await $('[href="/textinput"]').click();
    expect(await $$('//h3[text()="Text Input"]').length).toBeGreaterThan(0);

    await $('#newButtonName').addValue(randomText);

    await $('#updatingButton').click();

    expect(await $('#updatingButton').getText()).toEqual(randomText);
});
});
