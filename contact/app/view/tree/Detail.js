/**
 * Detail View
 */
Ext.define('Contact.view.tree.Detail', {
    extend: 'Ext.Component',

    xtype: 'wards-detail',

    tpl: [
        '<div class="wards-detail">',
        '  <div class="city-name">',
        '    <span class="ward-label">都市名: </span>',
        '    <span class="ward-value">{city}</span>',
        '  </div>',
        '  <div class="ward-name">',
        '    <span class="ward-label">区名: </span>',
        '    <span class="ward-value">{ward}</span>',
        '  </div>',
        '  <div class="ward-name">',
        '    <span class="ward-label">人口: </span>',
        '    <span class="ward-value">{population:number("0,000")} 人</span>',
        '  </div>',
        '  <div class="ward-name">',
        '    <span class="ward-label">面積: </span>',
        '    <span class="ward-value">{area:number("0.00")} km<sup>2</sup></span>',
        '  </div>',
        '  <div class="ward-name">',
        '    <span class="ward-label">人口密度: </span>',
        '    <span class="ward-value">{density:number("0,000")} 人/km<sup>2</sup></span>',
        '  </div>',
        '</div>'
    ]
});