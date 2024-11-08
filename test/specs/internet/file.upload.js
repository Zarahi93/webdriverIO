import { $ } from '@wdio/globals';
import * as path from 'path';

const fileName = 'test.txt'; 
const fullPathToFile = path.resolve(`./uploads/${fileName}`) ;

describe('File Upload test', () => {
it('file should be uploaded from the default uploaded directory', async () => {
    await $('[href="/upload"]').click();
    (await $('[id="file-upload"]')).setValue(fullPathToFile);
    await $('[id="file-submit"]').waitForExist();
    await $('[id="file-submit"]').click();

    let uploadedFiles = await $('[id="uploaded-files"]').getText();

    expect(uploadedFiles).toEqual(fileName);
})
})