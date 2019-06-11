import { call, put, select } from 'redux-saga/effects'

import api from '~/services/api'

import { Creators as ModalActions } from '../ducks/modal'
import { Creators as UsersActions } from '../ducks/users'

export function* addUser(action) {
    try {
        const { data } = yield call(api.get, `/users/${action.payload.user}`)

        const isDuplicated = yield select(state => state.users.data.find(user => user.id === data.id))

        if (isDuplicated) {
            yield put(UsersActions.addUserFailure('User already exits!'))
        } else {
            const userData = {
                id: data.id,
                name: data.name,
                avatar_url: data.avatar_url,
                login: data.login,
                bio: data.bio,
                coordinate: action.payload.coordinate,
            }
            yield put(UsersActions.addUserSuccess(userData))
            yield put(ModalActions.hideModal())
        }
    } catch (err) {
        yield put(UsersActions.addUserFailure('Something is wrong!'))
    }
}
