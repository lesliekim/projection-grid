import _ from 'underscore';
import { GridView } from '../grid-view.js';

const CONSTRUCTOR_OPTIONS = ['el', 'scrolling', 'tableClasses'];
const NONE_PROJECTION_OPTIONS = CONSTRUCTOR_OPTIONS.concat(['plugins']);

export default definePlugin => definePlugin('gridView', ['config'], config => {
  const gridView = new GridView(_.pick(config, CONSTRUCTOR_OPTIONS));

  gridView.set(_.omit(config, NONE_PROJECTION_OPTIONS));

  return gridView;
});

