import chance from '../../src/chance-the-wrapper';

/* These tests rely on the seed being set to '12345' */

it('should have a custom chance.object() property', () => {
    // given
    const expectedObj = { key: 'f01cbd08d2bb5f6e32a03845251e87241696452b' };

    // when
    const obj = chance.object();

    // then
    expect(obj).toEqual(expectedObj);
});
