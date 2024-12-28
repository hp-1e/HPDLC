// priority: -1

const hpdlcChampionTypeMap = [
    {
        type: 'hpdlc1',
        name: Text.red('残杀'),
        desc: Text.gray('每次攻击增加造成的伤害')
    },
    {
        type: 'hpdlc2',
        name: Text.red('适应'),
        desc: Text.gray('减少受到的伤害')
    },
    {
        type: 'hpdlc3',
        name: Text.red('诅咒'),
        desc: Text.gray('受到伤害减少玩家buff的持续时间')
    },
]

hpdlcChampionTypeMap.forEach(type => {
    championTypeMap.push(type)
})
/**
 * 精英怪承受伤害处理策略
 * @constant
 * @type {Object<string,function(Internal.LivingHurtEvent, EntityHurtCustomModel):void>}
 */
const hpdlcChampionPlayerDamageStrategies = {
    //适应
    'hpdlc2': function (event, data) {
        let entity = event.entity
        let hpdlc_bear_count = entity.persistentData.getInt('hpdlc_bear_count') ?? 0
        event.amount = event.amount * Math.pow((1 - 0.05),Math.min(hpdlc_bear_count,80) )
        entity.persistentData.putInt('hpdlc_bear_count',hpdlc_bear_count + 1)
    },
}

var champion_player_damage = Object.assign(championPlayerDamageStrategies, hpdlcChampionPlayerDamageStrategies);

/**
 * 精英怪造成伤害处理策略
 * @constant
 * @type {Object<string,function(Internal.LivingHurtEvent, EntityHurtCustomModel):void>}
 */
const hpdlcChampionPlayerBearStrategies = {
    //残杀
    'hpdlc1': function (event, data) {
        let entity = event.entity
        let hpdlc_damage_count = entity.persistentData.getInt('hpdlc_damage_count') ?? 0
        event.amount = event.amount * (1 + hpdlc_damage_count * 0.1)
        entity.persistentData.putInt('hpdlc_damage_count',hpdlc_damage_count + 1)
    },
}

var champion_player_bear = Object.assign(championPlayerBearStrategies, hpdlcChampionPlayerBearStrategies);

//看的墨染琴弦大佬的代码
//让精英怪词条在传送门挑战珍珠也显示
EntityEvents.spawned(event => {
    /*** @type {Internal.LivingEntity}*/
    let entity = event.entity
    if (!entity || !entity.isLiving() || !entity.isMonster()) return
    if (!entity.persistentData.contains('champion')) return
    let typeList = entity.persistentData.get('champion')
    let typeNameList = []
    typeList.forEach(type => {
        let typeName = type.getAsString()
        championTypeMap.forEach(cha => {
            if (cha.type == typeName) {
                typeNameList.push(cha.name)
                typeNameList.push(Text.gray('·'))
            }
        })
    });
    typeNameList.push(Text.gray('精英'))
    entity.setCustomName(typeNameList)
    entity.setCustomNameVisible(true)
})