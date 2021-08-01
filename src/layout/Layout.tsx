import * as React from 'react';
import { Layout, LayoutProps, Sidebar } from 'react-admin';
import AppBar from '@/layout/AppBar';
import { lightTheme } from './themes';

const CustomSidebar = (props: any) => <Sidebar {...props} size={200} />;

export default (props: LayoutProps) => {
    
    return (
        <Layout
            {...props}
            appBar={AppBar}
            sidebar={CustomSidebar}
            theme={lightTheme}
        />
    );
};
