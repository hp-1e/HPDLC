// priority: 1000

const hpdlckutongCount = 'hpdlckutongCount'
const hpdlckutongCountMax = 'hpdlckutongCountMax'
const defaulthpdlckutongCountMax = 100

/**
 * 初始化苦痛值显示
 * @param {Internal.ServerPlayer} player 
 */
function hpdlcinitAllBar(player) {
    if (!player.persistentData.contains(hpdlckutongCount)) {
        player.persistentData.putInt(hpdlckutongCount, 0)
    }
    if (!player.persistentData.contains(hpdlckutongCountMax)) {
        player.persistentData.putInt(hpdlckutongCountMax, defaulthpdlckutongCountMax)
    }
    let hpdlckutongCountNum = player.persistentData.getInt(hpdlckutongCount)
    let hpdlckutongCountPercent = hpdlckutongCountNum  / player.persistentData.getInt(hpdlckutongCountMax)
    let visible = false
    if (checkCurios(player, 'hpdlc:eyeglass')) {
        visible = true
    }

    player.paint({
        barBackGround: {
            //形状
            type: 'rectangle',
            //位置
            x: 0,
            y: '-$screenH/2+49',
            w: 11,
            h: 101,
            alignX: 'left',
            alignY: 'bottom',
            //外面的材质
            texture: 'hpdlc:textures/item/hpdlc_kutong_bar.png',
            visible: visible
        },
        hpdlckutongCountBarOverlay: {
            type: 'rectangle',
            x: 0,
            y: '-$screenH/2+49',
            v0: 1 - hpdlckutongCountPercent,
            v1: 1,
            w: 11,
            h: 101 * hpdlckutongCountPercent,
            alignX: 'left',
            alignY: 'bottom',
            //里面进度的颜色
            texture: 'hpdlc:textures/item/hpdlc_kutong_bar_overlay.png',
            visible: visible
        } ,barCountText: {
            type: 'text',
            x: 2,
            y: '-$screenH/2+59',
            text: `§6${hpdlckutongCountNum}§f`,
            alignX: 'left',
            alignY: 'bottom',
            visible: visible
        }
    })
    if (visible) {
        Utils.server.scheduleInTicks(20 * 60, event => {
            player.paint({ barCountText: { visible: false } })
        })
    }
}

/**
 * 更新苦痛值
 * @param {Internal.ServerPlayer} player 
 * @param {Number} count 
 */
function updatehpdlckutongCount(player, count) {
    let hpdlckutongCount = player.persistentData.getInt(hpdlckutongCountMax) ?? defaulthpdlckutongCountMax
    if (hpdlckutongCount > hpdlckutongCountMax) {
        hpdlckutongCount = hpdlckutongCountMax
    }
    if (hpdlckutongCount < 0) {
        hpdlckutongCount = 0
    }
    player.persistentData.putInt(hpdlckutongCount, hpdlckutongCount)
}

/**
 * 更新苦痛值上限
 * @param {Internal.ServerPlayer} player 
 * @param {Number} count 
 */
function updatehpdlckutongMaxCount(player, maxCount) {
    let count = player.persistentData.getInt(hpdlckutongCount) ?? 0
    if (count > maxCount) {
        count = maxCount
        player.persistentData.putInt(hpdlckutongCount, count)
    }
    player.persistentData.putInt(hpdlckutongCountMax, maxCount)
}

/**
 * 更新苦痛值显示
 * @param {Internal.ServerPlayer} player 
 * @param {Boolean} visible 
 */

function hpdlcupdateSideBar(player, visible) {
    let curhpdlckutongCount = player.persistentData.getInt(hpdlckutongCount)
    let hpdlckutongCountMax = player.persistentData.getInt(hpdlckutongCountMax)
    if (curhpdlckutongCount > hpdlckutongCountMax) {
        player.persistentData.putInt(hpdlckutongCount, hpdlckutongCountMax)
        curhpdlckutongCount = hpdlckutongCountMax
    }
    let percenthpdlckutongCount = curhpdlckutongCount / hpdlckutongCountMax
    player.paint({ barBackGround: { visible: visible }, hpdlckutongCountBarOverlay: { v0: 1 - percenthpdlckutongCount, h: 101 * percenthpdlckutongCount, visible: visible } })
}
