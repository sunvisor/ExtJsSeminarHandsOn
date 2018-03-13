/**
 * WordsGrid Controller
 */
Ext.define('Contact.view.wardsgrid.WardsGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.wardsgrid',

    renderWard: function (value, summaryData, field, metaData) {
        var record = metaData.record;

        return record.groupKey ? record.groupKey + '計' : '総合計';
    },

    renderPopulation: function (value) {
        return Ext.util.Format.number(value, '0,000') + ' 人';
    },

    renderArea: function(value) {
        return Ext.util.Format.number(value, '0.00') + ' Km<sup>2</sup>';
    },

    renderDensity: function(value) {
        return Ext.util.Format.number(value, '0,000') + ' 人/Km<sup>2</sup>';
    },
});