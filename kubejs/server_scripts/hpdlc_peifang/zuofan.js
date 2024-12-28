
ServerEvents.recipes(event => {
    function registerCustomRecipe(recipeModel) {
        event.custom(recipeModel)
    }
//阑尾型麦乐鸡
registerCustomRecipe(new CookingRecipe(Item.of(''), [Item.of('chestcavity:small_animal_appendix'), Item.of('extradelight:breading_misanplas'), Item.of('meetyourfight:velvet_fortune'), Item.of('kubejs:chicken_flavor_powder')], Item.of('hpdlc:chicken_appendix')).setCookingtime(45 * 20))
//肝型麦乐鸡
registerCustomRecipe(new CookingRecipe(Item.of(''), [
    Item.of('chestcavity:small_animal_liver'), 
    Item.of('extradelight:breading_misanplas'), 
    Item.of('meetyourfight:velvet_fortune'), 
    Item.of('kubejs:chicken_flavor_powder')], 
    Item.of('hpdlc:chicken_liver')).setCookingtime(45 * 20)) 
//脾型麦乐鸡
registerCustomRecipe(new CookingRecipe(Item.of(''), [
    Item.of('chestcavity:small_animal_spleen'), 
    Item.of('extradelight:breading_misanplas'), 
    Item.of('meetyourfight:velvet_fortune'), 
    Item.of('kubejs:chicken_flavor_powder')], 
    Item.of('hpdlc:chicken_spleen')).setCookingtime(45 * 20))
//胃型麦乐鸡
registerCustomRecipe(new CookingRecipe(Item.of(''), [
    Item.of('chestcavity:small_animal_stomach'), 
    Item.of('extradelight:breading_misanplas'), 
    Item.of('meetyourfight:velvet_fortune'), 
    Item.of('kubejs:chicken_flavor_powder')], 
    Item.of('hpdlc:chicken_stomach')).setCookingtime(45 * 20))
//肠型麦乐鸡
registerCustomRecipe(new CookingRecipe(Item.of(''), [
    Item.of('chestcavity:small_animal_intestine'), 
    Item.of('extradelight:breading_misanplas'), 
    Item.of('meetyourfight:velvet_fortune'), 
    Item.of('kubejs:chicken_flavor_powder')], 
    Item.of('hpdlc:chicken_intestine')).setCookingtime(45 * 20))
//肋骨型麦乐鸡
registerCustomRecipe(new CookingRecipe(Item.of(''), [
    Item.of('chestcavity:small_animal_rib'), 
    Item.of('extradelight:breading_misanplas'), 
    Item.of('meetyourfight:velvet_fortune'), 
    Item.of('kubejs:chicken_flavor_powder')], 
    Item.of('hpdlc:chicken_rib')).setCookingtime(45 * 20))
//人肉宴
registerCustomRecipe(
    new CookingRecipe(Item.of(''), [
    Item.of('chestcavity:lung'), 
    Item.of('chestcavity:heart'),
    Item.of('chestcavity:kidney'), 
    Item.of('chestcavity:liver'),
    Item.of('16x chestcavity:muscle'),
    Item.of('chestcavity:spleen')
], 
    Item.of('hpdlc:man_met')).setCookingtime(45 * 20)) 
})