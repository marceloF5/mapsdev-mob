import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MapView, { Marker, Callout } from 'react-native-maps'

import { Creators as ModalActions } from '~/store/ducks/modal'

import styles, {
    SCalloutContainer, SImage, SBio, SName,
} from './styles'

class Map extends Component {
    render() {
        const { users } = this.props
        const { showModal } = this.props
        return (
            <MapView
                style={styles.container}
                initialRegion={{
                    latitude: 38.71667,
                    longitude: -9.13333,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                showsUserLocation
                loadingEnabled
                onLongPress={({ nativeEvent: { coordinate } }) => showModal(coordinate)}
            >
                {users.data.map(user => (
                    <Marker key={user.id} coordinate={user.coordinate} title={user.login}>
                        <SImage
                            source={{
                                uri: user.avatar_url,
                            }}
                        />

                        <Callout title={user.login}>
                            <SCalloutContainer>
                                <SName>{user.name}</SName>

                                <SBio>{user.bio}</SBio>
                            </SCalloutContainer>
                        </Callout>
                    </Marker>
                ))}
            </MapView>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users,
})

const mapDispatchToProps = dispatch => bindActionCreators(ModalActions, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Map)
