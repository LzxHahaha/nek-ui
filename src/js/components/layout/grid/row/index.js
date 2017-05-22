/**
 * ------------------------------------------------------------
 * Row 栅格布局-行
 * ------------------------------------------------------------
 */

'use strict';

var Component = require('../../../../ui-base/component');
var _ = require('../../../../ui-base/_');
var template = require('./index.html');

/**
 * @class Row
 * @extend Component
 * @param {object}          [options.data]                        => 绑定数据
 * @param {number}          [options.data.span='']              => 栅格占据的列数
 * @param {number}          [options.data.offset='']            => 栅格左侧的间隔格数
 */
var Row = Component.extend({
  name: 'ui.row',
  template: template,
  config: function (data) {
    this.defaults({
      span: '',
      offset: '',
    });

    this.supr(data);
  },
});

module.exports = Row;
