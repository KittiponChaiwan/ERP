// ** React Imports
import { useEffect } from 'react'

// ** Next Imports
import Head from 'next/head'
import { Router, useRouter } from 'next/router'
import { createWrapper } from 'next-redux-wrapper'

// ** Redux Imports
import { Provider, useDispatch } from 'react-redux'
import { logoutUser } from 'src/@core/redux/authSlice'

// ** Cookies Import
import Cookies from 'js-cookie'

// ** Loader Import
import NProgress from 'nprogress'

// ** Emotion Imports
import { CacheProvider } from '@emotion/react'

// ** Config Imports
import themeConfig from 'src/configs/themeConfig'

// ** Component Imports
import UserLayout from 'src/layouts/UserLayout'
import ThemeComponent from 'src/@core/theme/ThemeComponent'

// ** Contexts
import { SettingsConsumer, SettingsProvider } from 'src/@core/context/settingsContext'

// ** Utils Imports
import { createEmotionCache } from 'src/@core/utils/create-emotion-cache'

// ** React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css'

// ** Global css styles
import '../../styles/globals.css'

// ** Check Login
import checkCookieToken from 'src/@core/utils/checkCookieToken'

const clientSideEmotionCache = createEmotionCache()

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
}

// ** Configure JSS & ClassName
const App = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest)
  const { emotionCache = clientSideEmotionCache, pageProps } = props

  // ** Router
  const Router = useRouter()
  const dispatch = useDispatch()

  // Variables
  const getLayout = Component.getLayout ?? (page => <UserLayout>{page}</UserLayout>)

  useEffect(() => {
    const UserStatus = checkCookieToken(Cookies.get('jwtToken'))
    console.log('test: ', UserStatus)
    if (!UserStatus) {
      if (Router.pathname !== '/login') {
        dispatch(logoutUser)
        Router.push('/pages/login')
      }
    } else {
      // หากมีค่าคุกกี้ token และในเส้นทาง /login ให้เปลี่ยนเส้นทางไปยังหน้าหลัก
      if (Router.pathname === '/pages/login') {
        Router.push('/')
      }
    }
  }, [Router.pathname])

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>{`${themeConfig.templateName} - Material Design React Admin Template`}</title>
          <meta
            name='description'
            content={`${themeConfig.templateName} – Material Design React Admin Dashboard Template – is the most developer friendly & highly customizable Admin Dashboard Template based on MUI v5.`}
          />
          <meta name='keywords' content='Material Design, MUI, Admin Template, React Admin Template' />
          <meta name='viewport' content='initial-scale=1, width=device-width' />
        </Head>

        <SettingsProvider>
          <SettingsConsumer>
            {({ settings }) => {
              return <ThemeComponent settings={settings}>{getLayout(<Component {...pageProps} />)}</ThemeComponent>
            }}
          </SettingsConsumer>
        </SettingsProvider>
      </CacheProvider>
    </Provider>
  )
}

const makeStore = () => store
const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(App)
