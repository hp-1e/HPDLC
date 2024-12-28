// priority: -1
global.hpdlc_LIGHTNING_SPELL_POWER = {key: 'irons_spellbooks:lightning_spell_power', name: 'hpdlclightning_spell_power', operation: 'addition' }
global.hpdlc_ENDER_SPELL_POWER = {key: 'irons_spellbooks:ender_spell_power', name: 'hpdlcender_spell_power', operation: 'addition' }
global.hpdlc_TEMP_MAX_MANA = { key: 'irons_spellbooks:max_mana', name: 'hpdlcTempMaxMana', operation: 'addition' }
global.hpdlc_TEMP_ATTACK_UP = { key: 'minecraft:generic.attack_damage', name: 'hpdlcTempAttackDamage', operation: 'addition' }
global.hpdlc_HEALTH_UP = { key: 'minecraft:generic.max_health', name: 'hpdlcMaxHealth', operation: 'multiply_base' }
//global.hpdlc_MOVEMENT_SPEED = { key: 'minecraft:generic.movement_speed', name: 'hpdlcmovementspeed', operation: 'addition' }

global.hpdlc_ATTRIBUTE_MAP = {
    'hpdlclightning_spell_power': global.hpdlc_LIGHTNING_SPELL_POWER,
    'hpdlcender_spell_power': global.hpdlc_ENDER_SPELL_POWER,
    'hpdlcTempMaxMana': global.hpdlc_TEMP_MAX_MANA,
    'hpdlcTempAttackDamage':global.hpdlc_TEMP_ATTACK_UP ,
    'hpdlcMaxHealth':global.hpdlc_HEALTH_UP 
    //'hpdlcmovementspeed': global.hpdlc_MOVEMENT_SPEED,
}
var assign1 = Object.assign(global.ATTRIBUTE_MAP, global.hpdlc_ATTRIBUTE_MAP);

global.hpdlc_TYPE_MAP = {
    'kubejs:hpdlc_storm': Text.of({ "translate": "hpdlc.tooltips.hpdlc_storm" }).color('#800080'),
    'kubejs:hpdlc_dimension': Text.of({ "translate": "hpdlc.tooltips.hpdlc_dimension" }).color('#800080'),
    'kubejs:hpdlc_curse': Text.of({ "translate": "hpdlc.tooltips.hpdlc_curse" }).color('#800080'),
}

var assign2 = Object.assign(global.TYPE_MAP, global.hpdlc_TYPE_MAP);