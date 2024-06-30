ServerEvents.recipes((e) => {
    e.shaped('origins:orb_of_origin', ['ABA', 'CDE', 'AFA'], {
        A: 'create:experience_nugget',
        B: 'minecraft:diamond',
        C: 'minecraft:amethyst_shard',
        D: 'minecraft:ender_pearl',
        E: 'minecraft:lapis_lazuli',
        F: 'minecraft:emerald',
    });

    e.shapeless('majruszsdifficulty:recall_potion', [
        'minecraft:glass_bottle',
        'minecraft:glow_ink_sac',
    ]);
});
