/* These tests rely on the seed being set to '12345' */

it('should have a custom chance.object() property', () => {
    // given
    process.env.CHANCE_SEED = '12345';

    const chance = require('../../src/index').default;

    const expectedObj = { key: 'f01cbd08d2bb5f6e32a03845251e87241696452b' };

    // when
    const obj = chance.object();

    // then
    expect(obj).toEqual(expectedObj);
});
