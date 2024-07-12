import { describe, expect, it } from 'vitest';
import { add } from '../../src/utils/add.util';

describe('Add Util', () => {
    it('Should add 1 + 2 getting 3', () => {
        expect(add(1, 2)).toBe(3);
    });
});
