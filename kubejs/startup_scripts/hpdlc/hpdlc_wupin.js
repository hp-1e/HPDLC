// priority: 100
StartupEvents.registry('minecraft:item', event => {
    //注册物品名字，物品类型
    event.create('hpdlc:bahui_eye', 'basic')
        //材质位置
        .texture('hpdlc:item/bahui_eye')
        //最大堆叠
        .maxStackSize(1)
        //
        .tag('curios:head')
        .tag('itemborders:diamond')
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
        //能够装备
            .canEquip(() => true)
            //装备时
            .onEquip((itemFrom, ctx, itemTo) => {
                if (ctx.entity().level.isClientSide()) return
                global.hpdlcarchivistEyeGlassOnEquip(itemFrom, ctx, itemTo)
            })
            //脱下时
            .onUnequip((itemFrom, ctx, itemTo) => {
                if (ctx.entity().level.isClientSide()) return
                global.hpdlcarchivistEyeGlassOnUnequip(itemFrom, ctx, itemTo)
            })
            //每秒
            .curioTick((item, ctx) => {
                if (ctx.entity().level.isClientSide()) return
                global.hpdlcarchivistEyeGlassTick(item, ctx)
            }))
//风暴合金
event.create("hpdlc:storm_metal_ingot","basic")
//风暴之星
event.create("hpdlc:withered_nether_star1","basic")
//大千录
event.create('hpdlc:daqianlu', 'irons_spells_js:spellbook')
.setMaxSpellSlots(15)
.addDefaultAttribute('irons_spellbooks:blood_spell_power', 'commandBookSpellPower', 0.5, 'addition')
})