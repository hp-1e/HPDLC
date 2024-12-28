ServerEvents.entityLootTables(event =>{
    //僵尸之心掉落
    event.modifyEntity("minecraft:zombie",Loot=>{
        //额外增加掉落物，不影响原本掉落物
       Loot.addPool(pool =>{
        //掉落僵尸之心占比为2
         pool.addItem('hpdlc:zombie_heart').weight(2)
        //空气占比98
         pool.addEmpty(98)
       })
    }),
    //魂火掉落
    event.modifyEntity("minecraft:skeleton",Loot=>{
       Loot.addPool(pool =>{
         pool.addItem('hpdlc:soul_fire').weight(2)
         pool.addEmpty(98)
       })
    })
    //黄金之爱—僵尸猪灵
    event.modifyEntity("minecraft:zombified_piglin",Loot=>{
        Loot.addPool(pool =>{
          pool.addItem('hpdlc:golden_love1').weight(2)
          pool.addEmpty(98)
        })
     })
     //黄金之爱—猪灵
    event.modifyEntity("minecraft:piglin",Loot=>{
        Loot.addPool(pool =>{
          pool.addItem('hpdlc:golden_love2').weight(2)
          pool.addEmpty(98)
        })
     })
     //黄金之爱—猪灵蛮兵
    event.modifyEntity("minecraft:piglin_brute",Loot=>{
        Loot.addPool(pool =>{
          pool.addItem('hpdlc:golden_love3').weight(1)
          pool.addEmpty(9)
        })
     })
    //古老的不死图腾
    event.modifyEntity("minecraft:evoker",Loot=>{
        Loot.addPool(pool =>{
          pool.addItem('hpdlc:totem_of_undying1').weight(1)
          pool.addEmpty(9)
        })
     })
     //灾厄之魂——卫道士
    event.modifyEntity("minecraft:vindicator",Loot=>{
      Loot.addPool(pool =>{
        pool.addItem('hpdlc:soul_disaster').weight(1)
        pool.addEmpty(9)
      })
   })
    //不稳定的火药
    event.modifyEntity("minecraft:creeper",Loot=>{
      Loot.addPool(pool =>{
        pool.addItem('hpdlc:gunpowder1').weight(1)
        pool.addEmpty(999)
      })
   })
   //导热棒
   event.modifyEntity("minecraft:blaze",Loot=>{
    Loot.addPool(pool =>{
      pool.addItem('hpdlc:thermal_conductivity_rod').weight(1)
      pool.addEmpty(99)
    })
 })
    //疣猪皮
   event.modifyEntity("minecraft:hoglin",Loot=>{
    Loot.addPool(pool =>{
      pool.addItem('hpdlc:hogskin1').weight(1)
      pool.addEmpty(99)
    })
 })
    //钢铁
   event.modifyEntity("minecraft:iron_golem",Loot=>{
    Loot.addPool(pool =>{
      pool.addItem('hpdlc:steel1').weight(1)
      pool.addEmpty(99)
    })
 })
//末影核心
event.modifyEntity("minecraft:enderman",Loot=>{
  Loot.addPool(pool =>{
    pool.addItem('hpdlc:ender_pearl1').weight(1)
    pool.addEmpty(99)
  })
})
//未知的药水
event.modifyEntity("minecraft:witch",Loot=>{
  Loot.addPool(pool =>{
    pool.addItem('hpdlc:unknown_potion').weight(1)
    pool.addEmpty(99)
  })
})
}
)