// 当前模块名（路由名前缀）
export const MODULE_PREFIX = 'page-index';
const MOUDLE_ROOT = '/' + MODULE_PREFIX;

// 当前模块的主入口
export const INDEX = {
  path: MOUDLE_ROOT || '/',
  name: `${MODULE_PREFIX}_root`,
};
