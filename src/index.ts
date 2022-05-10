import { Chance } from 'chance';

const initChanceWithSeed = () => {
    if (!process.env.CHANCE_SEED) {
        const seedGenerator = new Chance();

        process.env.CHANCE_SEED = seedGenerator.hash();
    }

    console.info('\nUsing Chance Seed: ', process.env.CHANCE_SEED);
    console.info('Set the CHANCE_SEED env variable to re-run the test suite with the same chance values');

    const chance = new Chance(process.env.CHANCE_SEED);

    chance.mixin({ object: () => ({ key: chance.hash() }) });

    return chance as Chance.Chance & { object: () => { key: string } };
};

const chance = initChanceWithSeed();

export default chance;
