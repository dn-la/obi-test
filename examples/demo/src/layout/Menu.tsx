import * as React from 'react';
// import { useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslate, MenuItemLink, MenuProps } from 'react-admin';

import visitors from '../visitors';
import { AppState } from '../types';

const Menu = ({ dense = false }: MenuProps) => {
    // const [, setState] = useState({
    //     menuCatalog: true,
    //     menuSales: true,
    //     menuCustomers: true,
    // });
    const translate = useTranslate();
    useSelector((state: AppState) => state.theme); // force rerender on theme change
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {' '}
            {/* <DashboardMenuItem /> */}
            {/* <SubMenu
                handleToggle={() => handleToggle('menuSales')}
                isOpen={state.menuSales}
                name="pos.menu.sales"
                icon={<orders.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to={`/commands`}
                    primaryText={translate(`resources.commands.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<orders.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to={`/invoices`}
                    primaryText={translate(`resources.invoices.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<invoices.icon />}
                    dense={dense}
                />
            </SubMenu>*/}
            {/* <SubMenu
                handleToggle={() => handleToggle('menuCatalog')}
                isOpen={state.menuCatalog}
                name="pos.menu.catalog"
                icon={<products.icon />}
                dense={dense}
            > */}
            {/* <MenuItemLink
                to={`/products`}
                primaryText={translate(`resources.products.name`, {
                    smart_count: 2,
                })}
                leftIcon={<products.icon />}
                dense={dense}
            /> */}
            {/* <MenuItemLink
                    to={`/categories`}
                    primaryText={translate(`resources.categories.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<categories.icon />}
                    dense={dense}
                /> */}
            {/* </SubMenu> */}
            {/* <SubMenu
                handleToggle={() => handleToggle('menuCustomers')}
                isOpen={state.menuCustomers}
                name="pos.menu.customers"
                icon={<visitors.icon />}
                dense={dense}
            > */}
            <MenuItemLink
                to={`/customers`}
                primaryText={translate(`resources.customers.name`, {
                    smart_count: 2,
                })}
                leftIcon={<visitors.icon />}
                dense={dense}
            />
            {/* <MenuItemLink
                    to={`/segments`}
                    primaryText={translate(`resources.segments.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<LabelIcon />}
                    dense={dense}
                /> */}
            {/* </SubMenu> */}
            {/* <MenuItemLink
                to={`/reviews`}
                primaryText={translate(`resources.reviews.name`, {
                    smart_count: 2,
                })}
                leftIcon={<reviews.icon />}
                dense={dense}
            /> */}
        </div>
    );
};

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(1),
    },
}));

export default Menu;
