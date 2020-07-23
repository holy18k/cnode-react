/*
 * @Author: hejp
 * @Date:   11:00
 * @Last Modified by:   hejp
 * @Last Modified time: 11:00
 */
import React, {
    lazy,
    Suspense,
    useEffect
} from 'react'
import {
    HashRouter,
    Route,
    Switch,
    Redirect,
    withRouter
} from 'react-router-dom'
import ErrorBoundary from '../components/errorBoundary'
import PrivateRoute from '../components/PrivateRoute'

const routerList = [
    {
        private: false,
        component: lazy(() => import(/*webpackChunkName:"home"*/'../page/home')),
        pathname: '/home'
    },
    {
        private: false,
        component: lazy(() => import(/*webpackChunkName:"details"*/'../page/details')),
        pathname: '/details'
    },
    {
        private: false,
        component: lazy(() => import(/*webpackChunkName:"my"*/'../page/my')),
        pathname: '/my'
    },
    {
        private: false,
        component: lazy(() => import(/*webpackChunkName:"my"*/'../page/login')),
        pathname: '/login'
    },
    {
        private: false,
        component: lazy(() => import(/*webpackChunkName:"myList"*/'../page/my-list')),
        pathname: '/my-list'
    },
    {
        private: false,
        component: lazy(() => import(/*webpackChunkName:"collect"*/'../page/collect')),
        pathname: '/collect'
    },
    {
        private: true,
        component: lazy(() => import(/*webpackChunkName:"message"*/'../page/message')),
        pathname: '/message'
    }
]
const Routers = withRouter((props) => {
    useEffect(() => {
        // 路由监听
        props.history.listen((history) => {
            // test
        })
    }, [props])
    return (
        <ErrorBoundary>
            <Suspense fallback={<div></div>}>
                    <Switch>
                        {
                            routerList.map((router, index) => {
                                if (router.private) {
                                    return <PrivateRoute
                                        key={index}
                                        path={ router.pathname }
                                        component={ router.component }
                                    />
                                } else {
                                    return <Route
                                        key={index}
                                        path={ router.pathname }
                                        component={ router.component } />
                                }
                            })
                        }
                        <Redirect to='/home' />
                    </Switch>
                </Suspense>
        </ErrorBoundary>
    )
})

export default function () {
    return (
        <HashRouter>
            <Routers />
        </HashRouter>
    )
}
