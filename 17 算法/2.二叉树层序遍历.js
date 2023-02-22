// 输入：root = [3,9,20,null,null,15,7]
// 输出：[[3],[9,20],[15,7]]
var levelOrder = function(root) {
    const res = []
    if(!root) return res
    const skt = [root]
    while(skt.length){
        const arr = []
        res.push(arr)
        for(var i = 1,len = skt.length ; i<=len ; i++){
            const cur = skt.pop()
            arr.push(cur.val)
            if(cur.left) skt.unshift(cur.left)
            if(cur.right) skt.unshift(cur.right)
        }
    }
    return res
};