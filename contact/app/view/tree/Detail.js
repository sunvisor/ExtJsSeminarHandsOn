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
        '    <span class="ward-value">{population}</span>',
        '  </div>',
        '  <div class="ward-name">',
        '    <span class="ward-label">面積: </span>',
        '    <span class="ward-value">{area}</span>',
        '  </div>',
        '  <div class="ward-name">',
        '    <span class="ward-label">人口密度: </span>',
        '    <span class="ward-value">{density}</span>',
        '  </div>',
        '</div>'
    ],

    data: {
        city: '名古屋市',
        ward: '千種区'
    }
});