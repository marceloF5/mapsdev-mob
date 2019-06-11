import React from 'react'
import { YellowBox } from 'react-native'

import '~/config/ReactotronConfig'

import { Provider } from 'react-redux'
import store from './store'

import Routes from '~/routes'
import { setNatigator } from '~/services/navigation'

YellowBox.ignoreWarnings(['Warning: Async Storage has been extracted from react-native core'])

const App = () => (
    <Provider store={store}>
        <Routes ref={setNatigator} />
    </Provider>
)

export default App
