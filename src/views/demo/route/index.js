import * as idx from '../pages'
import _import from '@/route/_import'

export default {
  path: '/demo',
  component: _import('layout/index'),
  name: 'system',
  redirect: 'noredirect',
  meta: {
    is_menu: true,
    title: '系统设置',
    icon: false
  },
  children: [
    {
      path: `/system/parameter`,
      name: 'parameter',
      redirect: '/demo/parameter/list',
      component: idx.System,
      meta: {
        title: '系统参数',
        is_menu: true,
        noCache: true,
        noJump: true,
      },
      children: [
        {
          path: `list`,
          name: 'parameterList',
          component: idx.Parameter,
          meta: {
            title: '列表',
          }
        },
        {
          path: `add`,
          name: 'parameterAdd',
          component: idx.ParameterAdd,
          meta: {
            title: '添加',
          }
        },
        {
          path: `edit/:id`,
          name: 'parameterAdd',
          component: idx.ParameterEdit,
          meta: {
            title: '编辑',
          }
        },
      ]
    },
    {
      path: `/system/dictionary`,
      name: 'dictionary',
      redirect: '/demo/dictionary/list',
      component: idx.System,
      meta: {
        title: '数据字典类型',
        is_menu: true,
        noCache: true,
        noJump: true,
      },
      children: [
        {
          path: `list`,
          name: 'dictionaryList',
          component: idx.Dictionary,
          meta: {
            title: '列表',
          }
        },
        {
          path: `add`,
          name: 'dictionaryAdd',
          component: idx.DictionaryAdd,
          meta: {
            title: '添加',
          }
        },
        {
          path: `edit/:id`,
          name: 'dictionaryAdd',
          component: idx.DictionaryEdit,
          meta: {
            title: '编辑',
          }
        },
        {
          path: `:id/children`,
          name: 'dictionaryChildren',
          component: idx.DictionaryChildren,
          meta: {
            title: '子项',
          }
        },
        {
          path: `:id/children/add`,
          name: 'dictionaryChildrenAdd',
          component: idx.DictionaryChildrenAdd,
          meta: {
            title: '子项添加',
          }
        },
        {
          path: `:id/children/edit/:child_id`,
          name: 'dictionaryChildrenEdit',
          component: idx.DictionaryChildrenEdit,
          meta: {
            title: '子项编辑',
          }
        },
      ]
    },
  ]
}
