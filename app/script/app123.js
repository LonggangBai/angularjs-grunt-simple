/**
 * Created by longgangbai on 2016/3/8.
 */

// 第一行，声明AngularJS模块, 并把ui-router传入AngularJS主模块，所有的结合起来我们就得到了Angular模块。
var myApp = angular.module("myApp", ["ui.router"]);
//把 $stateProvider 和 $urlRouteProvider 路由引擎作为函数参数传入，这样我们就可以为这个应用程序配置路由了.
myApp.config(function ($stateProvider, $urlRouterProvider) {
   //如果没有路由引擎能匹配当前的导航状态，那它就会默认将路径路由至 PageTab.html, 这个页面就是状态名称被声明的地方. 只要理解了这个，那它就像switch case语句中的default选项.
    $urlRouterProvider.when("", "/pagetab");

    $stateProvider
        .state("PageTab", {
            url: "/pagetab",
            templateUrl:  "../views/pagetab.html"
        })
        //现在，就由这一行来定义页面, 但是等一等，这里有点不同，我们之前为上面的状态名称加上了前缀，并且使用点“.“号进行了分隔. 这里很关键，它会告诉路由引擎我们在这里定义的是子页面/嵌入页面/嵌入(sub page / nested page / nested)状态的page/route.
        .state("PageTab.Page1", {
            url:"/page1",
            templateUrl:  "../views/page1.html"
        })
        //想象一下当我们想要在母版页中管理所有的页面时，我们就会想要一个叫做”ui-view“的占位标记, 因此我们现在把PageTab.html叫做一个母版页，因为它会把我们需要在PageTab.html中用”ui-view“ 声明好的其它页面都管理起来. 现在让我们来修改一下它.
        .state("PageTab.Page2", {
            url:"/page2",
            templateUrl:  "../views/page2.html"
        })
        .state("PageTab.Page3", {
            url:"/page3",
            templateUrl: "../views/page3.html"
        });
});