import React from 'react';
import {RoutedAnchor, Box, Image, Grommet} from 'grommet';
import {MENU_OPTIONS} from '../constants/pages'
import {NAV_BAR_THEME} from '../constants/themes';

export const NavBar = () => (
    <Grommet theme={NAV_BAR_THEME}>
        <Box direction='row'>
            <Box basis='xxsmall' height='xxsmall'>
                <Image src='dko.png'/>
            </Box>
            <RoutedAnchor label={MENU_OPTIONS[0]} path='/' margin='small'/>
            <RoutedAnchor label={MENU_OPTIONS[1]} path='/about' margin='small'/>
            <RoutedAnchor label={MENU_OPTIONS[2]} path='/dashboard' margin='small'/>
            <RoutedAnchor label={MENU_OPTIONS[3]} path= '/Video_Upload' margin='small'/>
        </Box>
    </Grommet>
    
);

