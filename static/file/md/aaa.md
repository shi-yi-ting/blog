### 封装
- **封装就是弄出一个整体框架，根据数据渲染出不同的结果**
1. 可以封装一个组件，组件中要渲染的数据由父组件传递到里面，子组件通过v-for将数据渲染出来
2. 可以在封装组件的内部预留插槽，使用过程中进行灵活填充

- **封装组件中关于样式的变化**
1. 封装组件内部使用动态类样式如 ：class="classList"  classList是一个变量这个变量的值是computed监听的返回值，它依赖父组件传递过来的某个值的真假来决定类样式的显示与隐藏，在监听computed监听属性当中我们定义一个数组list,通过push向list中动态添加类，然后return给classList

2. ：class="['类名1'， { 'active': isActive }, { 'panel-open': isActive && isOpen }]" 在原有类样式基础上根据某个变量或者多个变量动态在添加类样式

3. ：style="styles" 动态添加行内样式， styles变量的值为 computed 计算属性的返回值，计算属性当中直接return一个对象，对象当中为要写的样式如： { lineHeight: `${props.lineHeight || props.height}px`, } 注意以驼峰的形式

- **props的作用**
1. 使数据动态化，父组件将数据传递给子组件，子组件通过v-for进行渲染（数据格式一般为数组类型，数组中的值为对象）
2. 父组件通过传递某个值来决定封装组件内部某个 DOM 或者样式的显示与隐藏
3. props最好说明type,对于数组或者对象的默认值以函数返回值的形式进行返回

- **slot**
1. 插槽的作用是可以在封装组件内部填冲不同的内容
2. 区别于通过某个变量控制某个 DOM 的显示与隐藏，控制DOM的显示与隐藏它是在封装组件内部大体框架样式写死了的只是数据不同，它是通过v-if或者v-show决定其显示与隐藏，而 slot 插槽则是内可以填冲任何内容具有多变性

- **父组件与子组件**
1. 子组件props中有接收的 value，还有$emit('input')事件的时候，父组件可以通过 v-model进行传值

- **vue2.0与vue3.0**
1. vue2.0当中可以在组件标签当中定义 ref ,通过 this.$refs.xxx 的形式拿到该组件（子组件）的实例
2. vue2.0当中的 this 是有意义的，它指向的就是本组件的实例
3. vue2.0当中可通过 this.$children 的形式拿到父组件中所有子组件，为数组形式
4. 在父组件当中可以循环this.$children这个数组通过 let panel = this.$children[i], panel.panelIndex = i 的形式给在父组件当中给子组件当中的data 的 panelIndex赋值（注意子组件中的data要对这个 panelIndex 变量初始化为undefined）,也可以将 panel.panelIndex理解为给子组件的实例添加一个panelIndex 变量，当这个变量已经存在时则是修改变量的值（也就是我们在父组件当中可以通过拿到子组件的实例来改变子组件data当中定义的值）
5. 在子组件当中可以通过 this.$parent来拿到父组件实例，从而使用父组件当中的方法或变量，当然也可以通过子组件向父组件传值的形式

6. vue3.0当中也可以在组件标签当中通过 ref 来拿到组件
7. 通过v-for的形式如 <Panel v-for="(item, index) of panelList" :key="index" ref="panelRefs" :value="index">，则panelRefs.value为数组类型，值为组件实例
8. vue3.0当中的 this 为undefined
9. vue3.0没法通过 this.$children 拿到子组件的实例数组,也没法通过 this.$parent拿到父组件实例
10. vue3.0的setup()方法中有两个参数 props 和 content，可通过 content.parent拿到父组件实例，从而使用父组件当中的方法或数据
