import React, {Component} from 'react';
import Loadable from 'react-loadable';
import UIHome from 'page/uihome/index';
import DialogApp from 'page/dialog/index';
import NotificationApp from 'page/notification/index';
import AlertApp from 'page/alert/index';
import LoadingBoxApp from 'page/loadingbox/index';
let indexRoutes = [{
    path: '/uihome',
    component: UIHome,
    navName: 'UI主页'
},{
    path: '/dialog',
    component: DialogApp,
    navName: '弹框'
},{
    path: '/notification',
    component: NotificationApp,
    navName: '提示'
},{
    path: '/alert',
    component: AlertApp,
    navName: '警告'
}, {
        path: '/loadingbox',
        component: LoadingBoxApp,
        navName: '加载'
    }
];

export  {
    indexRoutes
}
