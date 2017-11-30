import { expect } from 'chai';
import { ServiceAPI } from '../src';

describe('service:', () => {
    it('service list', async () => {
        const { result } = await ServiceAPI.list();
    });
});
