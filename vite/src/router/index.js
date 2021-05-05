import {createRouter, createWebHistory} from 'vue-router'

const P404 = () => import('@/views/404/P404.vue')
const Login = () => import('@/views/Login/Login.vue')
const AppContainer = () => import('@/components/AppContainer.vue')
  const Message = () => import('@/views/Message/Message.vue')
    const MyMessage = () => import('@/views/Message/children/MyMessage.vue')
    const Notification = () => import('@/views/Message/children/Notification.vue')
  const Activity = () => import('@/views/Activity/Activity.vue')
    const ActivityContainer = () => import('@/views/Activity/children/ActivityContainer.vue')
  const Home = () => import('@/views/Home/Home.vue')
  const Note = () => import('@/views/Note/Note.vue')
  const Code = () => import('@/views/Code/Code.vue')
  const NoteEditor = () => import('@/views/NoteEditor/NoteEditor.vue')

  const Me = () => import('@/views/Me/Me.vue')
    const Profile = () => import('@/views/Me/children/Profile.vue')

const routers = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Welcome',
      redirect: { name: 'Login' }
    },
    {
      path: '/404',
      name: '404',
      component: P404
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/user/:id',
      name: 'User',
      component: AppContainer,
      props: true,
      children: [
        {
          path: '',
          redirect: { name: 'Home' }
        },
        {
          path: 'messages',
          name: 'User/Messages',
          component: Message,
          redirect: { name: 'User/Messages/MyMessages' },
          children: [
            {
              path: 'myMessage',
              name: 'User/Messages/MyMessages',
              component: MyMessage
            },
            {
              path: 'Notification',
              name: 'User/Messages/Notifications',
              component: Notification
            }
          ]
        },
        {
          path: 'activities',
          name: 'User/Activities',
          component: Activity,
          redirect: { name: 'User/Activities/All' },
          children: [
            {
              path: '',
              name: 'User/Activities/All',
              component: ActivityContainer
            },
            {
              path: 'follow/:uid',
              name: 'User/Activities/Follow',
              component: ActivityContainer
            }
          ]
        },
        {
          path: 'home',
          name: 'User/Home',
          component: Home
        },
        {
          path: 'notes',
          name: 'User/Notes',
          component: Note,
        },
        {
          path: 'codes',
          name: 'User/Codes',
          component: Code
        },
        {
          path: 'me',
          name: 'User/Me',
          component: Me,
          children: [
            {
              path: 'profile',
              name: 'User/Me/Profile',
              component: Profile
            }
          ]
        },
        {
          path: 'noteEditor',
          name: 'User/Notes/NoteEditor',
          component: NoteEditor
        }
      ]
    }
  ]
})

export default routers
