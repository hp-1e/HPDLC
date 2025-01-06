// priority: 800
/**
 * @param {Internal.ItemStack} itemFrom 
 * @param {Internal.SlotContext} ctx 
 * @param {Internal.ItemStack} itemTo 
 */
global.hpdlcarchivistEyeGlassOnEquip = (itemFrom, ctx, itemTo) => {
    if (!ctx.entity().isPlayer()) return
    /** @type {Internal.ServerPlayer} */
    let player = ctx.entity()
    hpdlcinitAllBar(player)

}


/**
 * @param {Internal.ItemStack} itemFrom 
 * @param {Internal.SlotContext} ctx 
 * @param {Internal.ItemStack} itemTo 
 */
global.hpdlcarchivistEyeGlassOnUnequip = (itemFrom, ctx, itemTo) => {
    if (!ctx.entity().isPlayer()) return
    ctx.entity().paint({ barBackGround: { visible: false }, resourceBarOverlay: { visible: false }, warpBarOverlay: { visible: false } })
}


/**
 * @param {Internal.ItemStack} item
 * @param {Internal.SlotContext} ctx 
 */
global.hpdlcarchivistEyeGlassTick = (item, ctx) => {
    /**@type {Internal.ServerPlayer} */
    let player = ctx.entity()
    if (player.level.isClientSide()) return
    if (player.age % 20 != 0) return
    if (!player.isPlayer()) return
    let visible = true
    hpdlcupdateSideBar(player, visible)
}