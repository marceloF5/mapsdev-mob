import React from 'react'

import Map from '~/components/Map'
import Modal from '~/components/Modal'
import { StatusBar } from 'react-native'

// import { Container } from './styles';

const Home = () => (
    <>
        <StatusBar barStyle="light-content" />
        <Map />
        <Modal />
    </>
)

export default Home
