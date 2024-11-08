import {expect, $} from '@wdio/globals';

const randomString = crypto.randomUUID();

describe('Dynamic Control test', () => {
    it('populated text should be displayed in dinamic control', async () => {
        
        (await $('[href="/dynamic_controls"]')).click();

        (await $('//*[@id="input-example"]/button')).click();

        let inputFiel = await $('#input-example input[type=text]');
        await inputFiel.waitForEnabled();

        await inputFiel.setValue(randomString);
        let text = await inputFiel.getValue();

        expect(text).toEqual(randomString);
    
    })
})