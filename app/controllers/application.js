import Controller from '@ember/controller';

const availableOptions = ['one', 'two', 'three'];

export default Controller.extend({
  availableOptions: Object.freeze(availableOptions),
});
