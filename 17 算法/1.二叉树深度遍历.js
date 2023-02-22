/*
 * @Author: rengar.liu
 * @Date: 2023-02-16 20:43:57
 * @LastEditTime: 2023-02-19 16:01:44
 * @LastEditors: rengar.liu
 * @Description: 
 */
// 按 左子树 ->根结点 -> 右子树 顺序进行遍历. 也叫深度优先算法
// 先收集根节点的值，然后递归调用左子树，然后递归调用右子树
// 输入：root = [1,null,2,3]
// 输出：[1,3,2]
// react16开始diff算法用的就是深度遍历法,广度优先容易导致组件时序错乱
// 但是带来了性能瓶颈,复杂度为On的3次方,其中n表示节点总数
// 对此React用了一个非常经典的手法将复杂度降低为On就是分治
// React从树 组件 元素三个方面进行策略优化
// 策略1:忽略节点跨层级操作场景,提升对比效率. 即只对同层级别子节点进行比较.如果发现同层节点不存在了,那么对该节点及子节点会完全删除,不会用于进一步比较,提升了对比效率
// 策略2:如果组件的class一致,则默认为相似的树结构.否则默认为不同的树结构.是同类就比较,不是则放入补丁中
// 策略3:同一层级子节点,可通过标记key的方式进行列表比对.元素节点对比主要发生在同层级中,通过标记节点操作生成补丁.节点操作包括插入,移动,删除等
// 通过标记key的方式,React可以直接移动DOM节点,降低内耗

// react16开始引入fible机制,fible机制下节点与树分别采用FiberNode与FiberTree进行重构,
// FiblerNode采用双链表的结构可以找到兄弟节点与子节点,使得更新过程可以随时暂停恢复,FiberTree则是FiberNode生成的树.
// Fiber机制下整个更新过程由current与workInProgress两棵树双缓冲完成,当workInProgress修改完成之后通过修改current相关指针指向的节点直接抛弃老树,虽然直接简单粗暴但很有效

var inorderTraversal = function(root) {
    const res = []
    const fun = function(root){
        if(!root) return
        fun(root.left)
        res.push(root.val)
        fun(root.right)
    }
    fun(root)
    return res
};

console.log('123')