import React, { Component } from 'react'
import { Box, VStack, Divider, NativeBaseProvider, ScrollView } from 'native-base';

class CardComponent extends Component{
    render(){
        return(
            <NativeBaseProvider>
                <ScrollView bounces={true}>
                    <Box border={1} borderRadius='md'>
                        <VStack space={4} divider={<Divider />}>
                            <Box px={4} pt={4}>
                                NativeBase
                            </Box>
                            <Box px={4}>
                                NativeBase is a free and open source framework that enable developers
                                to build high-quality mobile apps using React Native iOS and Android
                                apps with a fusion of ES6.
                            </Box>
                            <Box px={4} pb={4}>
                                GeekyAnts
                            </Box>
                        </VStack>
                    </Box>
                    <Box border={1} borderRadius='md'>
                        <VStack space={4} divider={<Divider />}>
                            <Box px={4} pt={4}>
                                NativeBase
                            </Box>
                            <Box px={4}>
                                NativeBase is a free and open source framework that enable developers
                                to build high-quality mobile apps using React Native iOS and Android
                                apps with a fusion of ES6.
                            </Box>
                            <Box px={4} pb={4}>
                                GeekyAnts
                            </Box>
                        </VStack>
                    </Box>
                    <Box border={1} borderRadius='md'>
                        <VStack space={4} divider={<Divider />}>
                            <Box px={4} pt={4}>
                                NativeBase
                            </Box>
                            <Box px={4}>
                                NativeBase is a free and open source framework that enable developers
                                to build high-quality mobile apps using React Native iOS and Android
                                apps with a fusion of ES6.
                            </Box>
                            <Box px={4} pb={4}>
                                GeekyAnts
                            </Box>
                        </VStack>
                    </Box>
                    <Box border={1} borderRadius='md'>
                        <VStack space={4} divider={<Divider />}>
                            <Box px={4} pt={4}>
                                NativeBase
                            </Box>
                            <Box px={4}>
                                NativeBase is a free and open source framework that enable developers
                                to build high-quality mobile apps using React Native iOS and Android
                                apps with a fusion of ES6.
                            </Box>
                            <Box px={4} pb={4}>
                                GeekyAnts
                            </Box>
                        </VStack>
                    </Box>
                    <Box border={1} borderRadius='md'>
                        <VStack space={4} divider={<Divider />}>
                            <Box px={4} pt={4}>
                                NativeBase
                            </Box>
                            <Box px={4}>
                                NativeBase is a free and open source framework that enable developers
                                to build high-quality mobile apps using React Native iOS and Android
                                apps with a fusion of ES6.
                            </Box>
                            <Box px={4} pb={4}>
                                GeekyAnts
                            </Box>
                        </VStack>
                    </Box>
                </ScrollView>
            </NativeBaseProvider>
        );
    }
}

export default CardComponent;