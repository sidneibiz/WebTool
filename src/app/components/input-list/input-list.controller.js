import template from './input-list.html';

class InputListController {

  constructor() {
    'ngInject';
    this.values = [];
    this.showList = false;
    this.init();
  }

  init() {
    this.values = [{
      'valor': 'comsol_fs',
    }, {
      'valor': 'fatact_f5',
    }, {
      'valor': 'fatact_gr',
    }, {
      'valor': 'atepac_a1',
    }]
  }

  click(value) {
    this.model = value;
    this.focus = false;
  }

}

export default {
  template: template,
  controller: InputListController,
  bindings: {
    values: '=',
    label: '@',
    labelnew: '@',
    labelout: '@',
    model: '=',
    id: "@",
    type: "@"
  }
};