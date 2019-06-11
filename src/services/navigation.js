import { NavigationActions } from 'react-navigation'

let navigator

export function setNatigator(ref) {
    navigator = ref
}

export function navigate(routeName, params) {
    navigator.dispatch(NavigationActions.navigate({ routeName, params }))
}
