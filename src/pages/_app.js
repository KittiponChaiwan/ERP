// ** React Imports
import { useEffect } from 'react'

// ** Next Imports
import Head from 'next/head'
import { Router, useRouter } from 'next/router'

// ** Redux Imports
import { wrapper } from '../@core/redux/store'
import { useDispatch } from 'react-redux'

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
import { checkCookieToken } from 'src/@core/utils/checkCookieToken'

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
const App = ({ Component, emotionCache = clientSideEmotionCache, pageProps }) => {
  // ** Router
  const Router = useRouter()
  const dispatch = useDispatch()

  // Variables
  const getLayout = Component.getLayout ?? (page => <UserLayout>{page}</UserLayout>)
  const UserStatus = checkCookieToken(Cookies.get('jwtToken'))

  useEffect(() => {
    if (!UserStatus) {
      // เปลี่ยนเส้นทางไปยังหน้าเข้าสู่ระบบ หรือเส้นทางที่คุณต้องการ
      dispatch(logoutUser)
      Router.push('/pages/login')
    }
  }, [])

  return (
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
  )
}

export default wrapper.withRedux(App)
