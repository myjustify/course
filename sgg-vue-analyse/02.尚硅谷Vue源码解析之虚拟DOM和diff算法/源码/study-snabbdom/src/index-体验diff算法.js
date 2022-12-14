import { init } from 'snabbdom/init';
import { classModule } from 'snabbdom/modules/class';
import { propsModule } from 'snabbdom/modules/props';
import { styleModule } from 'snabbdom/modules/style';
import { eventListenersModule } from 'snabbdom/modules/eventlisteners';
import { h } from 'snabbdom/h';

// 得到盒子和按钮
const container = document.getElementById('container');
const btn = document.getElementById('btn');

// 创建出patch函数
const patch = init([classModule, propsModule, styleModule, eventListenersModule]);

const vnode1 = h('ul', {}, [
    h('li', { key: 'A' }, 'A'),
    h('li', { key: 'B' }, 'B'),
    h('li', { key: 'C' }, 'C'),
    h('li', { key: 'D' }, 'D')
]);

patch(container, vnode1);

const vnode2 = h('ul', {}, [
    h('li', { key: 'D' }, 'D'),
    h('li', { key: 'A' }, 'A'),
    h('li', { key: 'C' }, 'C'),
    h('li', { key: 'B' }, 'B')
]);

// 点击按钮时，将vnode1变为vnode2
btn.onclick = function () {
    patch(vnode1, vnode2);
};