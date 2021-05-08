import {createRouter, createWebHistory} from 'vue-router'

const P404 = () => import('@/views/404/P404.vue')
const Login = () => import('@/views/Login/Login.vue')
const SignUp = () => import('@/views/SignUp/SignUp.vue')
const AppContainer = () => import('@/components/AppContainer.vue')
  const Discovery = () => import('@/views/Discovery/Discovery.vue')
  const Activity = () => import('@/views/Activity/Activity.vue')
    const ActivityContainer = () => import('@/views/Activity/children/ActivityContainer.vue')
  const Home = () => import('@/views/Home/Home.vue')
  const Note = () => import('@/views/Note/Note.vue')
    const NoteEditor = () => import('@/views/NoteEditor/NoteEditor.vue')
  const Message = () => import('@/views/Message/Message.vue')
    const MyMessage = () => import('@/views/Message/children/MyMessage.vue')
    const Notification = () => import('@/views/Message/children/Notification.vue')

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
      path: '/signUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/author/:id',
      name: 'Author',
      component: AppContainer,
      props: true,
      children: [
        {
          path: '',
          redirect: { name: 'Home' }
        },
        {
          path: 'discovery',
          name: 'Author/Discovery',
          component: Discovery
        },
        {
          path: 'activities',
          name: 'Author/Activities',
          component: Activity,
          redirect: { name: 'Author/Activities/All' },
          children: [
            {
              path: '',
              name: 'Author/Activities/All',
              component: ActivityContainer
            },
            {
              path: 'follow/:uid',
              name: 'Author/Activities/Follow',
              component: ActivityContainer
            }
          ]
        },
        {
          path: 'home',
          name: 'Author/Home',
          component: Home
        },
        {
          path: 'notes',
          name: 'Author/Notes',
          component: Note,
        },
        {
          path: 'messages',
          name: 'Author/Messages',
          component: Message,
          redirect: { name: 'Author/Messages/MyMessages' },
          children: [
            {
              path: 'myMessage',
              name: 'Author/Messages/MyMessages',
              component: MyMessage
            },
            {
              path: 'Notification',
              name: 'Author/Messages/Notifications',
              component: Notification
            }
          ]
        },
        {
          path: 'me',
          name: 'Author/Me',
          component: Me,
          children: [
            {
              path: 'profile',
              name: 'Author/Me/Profile',
              component: Profile
            }
          ]
        },
        {
          path: 'noteEditor',
          name: 'Author/NoteEditor',
          component: NoteEditor
        }
      ]
    }
  ]
})

export default routers
