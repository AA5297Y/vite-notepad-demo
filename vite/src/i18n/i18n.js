import { createI18n } from "vue-i18n";

const messages = {
  'zh-cn': {
    message: {
      component: {
        leftTab: {
          onTopList: {
            title: '置顶的项目'
          }
        }
      },
      router: {
        P404: {
          notFound: '页面未找到'
        },
        message: {
          name: '消息',
          myMessage: '我的消息',
          notification: '系统通知',
          unRead: '未读'
        },
        activity: {
          name: '动态',
          myMessage: '我的消息',
          myActivity: '我的动态',
          notification: '系统消息',
          type: {
            note: '笔记',
            comment: '评论',
            reply: '回复',
            share: '分享',
            mail: '私信',
          }
        },
        home: {
          name: '主页',
          welcomeBack: '欢迎回来，',
          welcomeL: '欢迎来到',
          welcomeR: '的站点',
          working: '正在编辑:',
          recent: '最近的'
        },
        note: {
          name: '笔记',
          private: '私有',
          public: '公开',
          onTop: '置顶',
          collection: '收藏',
          working: '编辑中',
          tagFilter: '按标签过滤'
        },
        code: {
          name: '代码',
          update: '更新',
          updateType: {
            bugFix: '错误修复',
            normalUpdate: '常规更新',
            newFeature: '新功能'
          }
        },
        noteEditor: {
          name: '笔记编辑器',
          save: '保存',
          publish: '发布',
          title: '标题',
          desc: '描述',
          tags: '标签',
          newTag: '添加标签',
        }
      },
      button: {
        login: '登录',
        signUp: '注册',
        confirm: '确定',
        cancel: '取消',
        yes: '是',
        no: '否',
        open: '打开',
        change: '更改',
        search: '搜索',
        new: '新建',
        edit: '编辑',
        delete: '删除'
      },
      text: {
        login: '登录',
        signUp: '注册',
        username: '用户名',
        password: '密码'
      },
      dateTime: {
        year: '年',
        month: '月',
        date: '日',
        hour: '小时',
        minute: '分钟',
        ago: '前'
      }
    }
  },

  'en': {
    message: {
      router: {
        P404: {
          notFound: 'Page not Found.'
        },
        message: {
          name: 'Message',
          myMessage: 'MyMessage',
          notification: 'Notification',
          unRead: 'Unread'
        },
        activity: {
          name: 'Activity',
          myActivity: 'MyActivity',
          type: {
            note: 'Article',
            comment: 'Comment',
            reply: 'Reply',
            share: 'Share',
            mail: 'Mail'
          }
        },
        home: {
          name: 'Home',
          welcomeBack: 'Welcome back，',
          welcomeL: 'Welcome To ',
          welcomeR: '`s site',
          working: 'Working:',
          recent: 'Recently '
        },
        note: {
          name: 'Note',
          private: 'Private',
          public: 'Public',
          onTop: 'Top',
          collection: 'Collection',
          working: 'Working',
          tagFilter: 'TagFilter'
        },
        code: {
          name: 'Code',
          update: 'Update',
          updateType: {
            bugFix: 'BugFix',
            normalUpdate: 'NormalUpdate',
            newFeature: 'NewFeature'
          }
        }
      },
      button: {
        login: 'Login',
        signUp: 'SignUp',
        confirm: 'Confirm',
        cancel: 'Cancel',
        yes: 'Yes',
        no: 'No',
        open: 'open',
        change: 'Change',
        search: 'Search',
        new: 'New',
        edit: 'Edit',
        delete: 'Delete'
      },
      text: {
        login: 'Login',
        signUp: 'SignUp',
        username: 'user name',
        password: 'password'
      },
      dateTime: {
        year: 'Year',
        month: 'Month',
        date: 'Day',
        hour: 'Hours',
        minute: 'Minutes',
        ago: ' ago'
      }
    }
  }
}

export default createI18n({
  locale: 'zh-cn',
  fallbackLocale: 'en',
  messages
})
