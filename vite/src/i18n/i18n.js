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
        discovery: {
          name: '发现',
          search: {
            titleL: '搜索',
            titleR: '网络'
          },
          type: {
            user: '用户',
            activity: '动态',
            note: '笔记'
          }
        },
        activity: {
          name: '动态',
          myMessage: '我的消息',
          myActivity: '我的动态',
          notification: '系统消息',
          private: '私密',
          type: {
            note: '笔记',
            comment: '评论',
            reply: '回复',
            share: '分享',
            mail: '私信'
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
        noteEditor: {
          name: '笔记编辑器',
          save: '保存',
          publish: '发布',
          title: '标题',
          desc: '描述',
          tags: '标签',
          newTag: '添加标签',
        },
        message: {
          name: '消息',
          myMessage: '我的消息',
          notification: '系统通知',
          unRead: '未读'
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
        delete: '删除',
        follow: '关注',
        disFollow: '取消关注',
        profile: '设置'
      },
      text: {
        login: '登录',
        signUp: '注册',
        email: '邮箱',
        emailFormatError: '邮箱格式错误',
        username: '用户名',
        usernameFormatError: '用户名必须为6-32位',
        password: '密码',
        passwordFormatError: '密码仅必须为8-32位字母，数字或_,?.+-*/等符号',
        repeatPassword: '重复密码',
        repeatPasswordNotEqual: '重复密码不相同'
      },
      dateTime: {
        year: '年',
        month: '月',
        date: '日',
        hour: '小时',
        minute: '分钟',
        ago: '前'
      },
      messages: {
        'Bad credentials': '账号或密码错误',
      }
    }
  }
}

export default createI18n({
  locale: 'zh-cn',
  fallbackLocale: 'en',
  messages
})
