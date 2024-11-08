import {expect, $ , $$} from '@wdio/globals';

const expectedSum = 251;
const currencySign = '$';

describe('Data table test', () => {
    it('sum of Due values should be correct', async () => {
        await $('[href="/tables"]').click();
        
        const dueItems = await $$('//*[@id="table1"]//td[4]');
        let actualSum = 0;

        for await(const item of dueItems){
        let text= await item.getText();
        actualSum += Number(text.replace(currencySign, ""));
        }
        
        expect(actualSum).toEqual(expectedSum);
    })
})