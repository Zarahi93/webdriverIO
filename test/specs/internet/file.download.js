import {expect, $} from '@wdio/globals';
import * as path from 'path';
import * as fs from 'fs';

const fileName = 'test.txt';

describe('File Download test', () => {

before('Create download folder', async () => {
    fs.mkdirSync(global.downloadDir);
});

    it('File should be downloaded to the default downloads directory', async () => {
        
        await $('[href="/download"]').click();

        let fileLink = await $(`[href="download/${fileName}"]`);
        await expect(fileLink).toExist();

        await fileLink.click();
        let downloadedFilePath = path.join(global.downloadDir, fileName);

        await browser.waitUntil(() => {
            return fs.existsSync(downloadedFilePath);
        });

        await expect(fs.existsSync(downloadedFilePath)).toBeTruthy();
    });

after('Delete download folder', async () => {
    fs.rmSync(global.downloadDir, {recursive: true });
});

})