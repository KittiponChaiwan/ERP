import React, { useEffect } from 'react'
import { Provider, useSelector } from 'react-redux'
import { useRouter, Router as NextRouter } from 'next/router'
import { wrapper } from 'src/redux/store'
import Head from 'next/head'
import NProgress from 'nprogress'
import { CacheProvider } from '@emotion/react'
import themeConfig from 'src/configs/themeConfig'
import UserLayout from 'src/layouts/UserLayout'
import ThemeComponent from 'src/@core/theme/ThemeComponent'
import { SettingsConsumer, SettingsProvider } from 'src/@core/context/settingsContext'
import { createEmotionCache } from 'src/@core/utils/create-emotion-cache'
import '../../styles/globals.css'

const clientSideEmotionCache = createEmotionCache()

if (themeConfig.routingLoader) {
  NextRouter.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  NextRouter.events.on('routeChangeError', () => {
    NProgress.done()
  })
  NextRouter.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
}

const InnerApp = ({ Component, pageProps, emotionCache }) => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  const router = useRouter()

  console.log('isLoggedIn', isLoggedIn)

  useEffect(() => {
    if (!isLoggedIn && router.pathname !== '/pages/login') {
      router.push('/pages/login')
    } else if (isLoggedIn && router.pathname === '/pages/login') {
      router.push('/')
    }
  }, [isLoggedIn])

  const getLayout = Component.getLayout ?? (page => <UserLayout>{page}</UserLayout>)

  return (
    <CacheProvider value={emotionCache}>
      <Head>{/* ... */}</Head>
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

const App = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest)
  const { emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <Provider store={store}>
      <InnerApp Component={Component} pageProps={pageProps} emotionCache={emotionCache} />
    </Provider>
  )
}

export default App
