import React, { Component } from 'react';
import {View, Text, Pano, AppRegistry, asset, StyleSheet} from 'react-vr';

const places = [
    {
        title: 'Winter Outdoor',
        image: 'winter-outdoor.jpg'
    },
    {
        title: 'Starry Sky',
        image: 'starry-sky.jpg'
    },
    {
        title: 'Louvre',
        image: 'louvre-vr.jpg'
    },
    {
        title: 'VR World',
        image: 'chess-world.jpg'
    }
]


class WorldTour extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
            place: 'starry-sky.jpg'
        }
    }

    toggleMenu() {
        this.setState({showMenu: !this.state.showMenu})
    }

    render() {
        return (
            <View>
                <Pano source={asset(this.state.place)}></Pano>
                <View
                    style={styles.menuButton}
                    onEnter={() => this.toggleMenu()}
                    >
                    <Text style={styles.menuButtonText}>
                        {this.state.showMenu ? 'Close Menu' : 'Open Menu'}
                    </Text>
                </View>
                {
                    this.state.showMenu ?
                        <View style={styles.menu}>
                            {
                                places.map((place, index) => {
                                    return (
                                        <View style={styles.menuItem}
                                              key={index}
                                              onEnter={() => this.setState({place: place.image})}
                                        >
                                            <Text style={styles.menuItemText}>{place.title}</Text>
                                        </View>
                                    )
                                })
                            }
                        </View>
                     :
                        <View></View>
                }
            </View>
        )
    }
};

const styles  = StyleSheet.create({
    menu: {
        width: 5,
        height: 1.25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        transform: [
            {translate: [-2, 0, -7.5]}
        ]
    },
    menuButton: {
        backgroundColor: '#000',
        borderRadius: 0.25,
        width: 0.5,
        height: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.01,
        transform: [
            {translate: [-2, 0, -5]}
        ]
    },
    menuButtonText: {
        textAlign: 'center',
        fontSize: 0.15,
        color: '#fff'
    },
    menuItem: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 1,
        height: 1,
        borderRadius: 0.5,
        borderWidth: 0.02,
        backgroundColor: '#000'
    },
    menuItemText: {
        fontSize: 0.2,
        textAlign: 'center',
        color: '#fff'
    }
})



AppRegistry.registerComponent('WorldTour', () => WorldTour);