// priority: 9

/**
 * 器官按键激活策略
 * 对应.tag('kubejs:key_pressed')
 * @constant
 * @type {Object<string,function(Internal.NetworkEventJS, organ):void>}
 */
const hpdlcOrganPlayerKeyPressedOnlyStrategies = {
    //后备隐藏能源
    'hpdlc:hidden_reserve_energy': function (event, organ) {
        let player = event.player
        let count = player.persistentData.getInt(resourceCount)
        let entityList = getLivingWithinRadius(player.getLevel(), new Vec3(player.x, player.y, player.z), 10)
        //清除自身buff
        let beneficialEffects = []
        player.potionEffects.active.forEach(ctx => {
            if (ctx.effect.CC_IsBeneficial()) {
                beneficialEffects.push(ctx.effect)
            }
        })
        if (beneficialEffects.length > 0) {
            beneficialEffects.forEach(effect => {
                player.removeEffect(effect)
            })
        }
        //爆炸，获取周围实体造成一次伤害
        if (player.getCooldowns().isOnCooldown(Item.of(organ.id))) {return}
            player.addItemCooldown(organ.id, 20 * 1800)
            let explosion = event.player.block.createExplosion()
            player.getServer().runCommandSilent('playsound minecraft:entity.generic.explode player @a ' + player.x + ' ' + player.y + ' ' + player.z)
            explosion.strength(10)
            explosion.causesFire(true)
            explosion.explode()
            entityList.forEach(entity => {
                player.removeEffect()
                entity.attack(DamageSource.playerAttack(player).bypassArmor().bypassEnchantments().bypassInvul().bypassMagic(), count * 10000)
                entity.invulnerableTime = 0
                updateResourceCount(player, 0)
        })
    },
    //穿梭器
    'hpdlc:chuansuo': function (event, organ) {
        let player = event.player
        let count = player.persistentData.getInt(resourceCount)
        if (player.isSpectator()) {
            player.setGameMode('survival')}
        if (count <= 500)return
            if (!player.isSpectator()) {
                player.setGameMode('spectator')
                player.potionEffects.add('minecraft:glowing', 20 * 60)
                updateResourceCount(player, count - 500)
                event.server.scheduleInTicks(20 * 60, ctx => {
                    player.setGameMode('survival')
                    player.closeMenu()
            })
        }
    },
}
var assign_organ_player_key_pressed_only = Object.assign(organPlayerKeyPressedOnlyStrategies, hpdlcOrganPlayerKeyPressedOnlyStrategies);