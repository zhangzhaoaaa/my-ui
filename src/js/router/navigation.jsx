import React, {Component} from 'react';
import Loadable from 'react-loadable';
import UIHome from 'page/uihome/index';


let indexRoutes = [{
    path: '/uihome',
    component: UIHome,
    navName: 'UI主页'
}];

export  {
    indexRoutes
}
