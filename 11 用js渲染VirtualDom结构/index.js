new PerformanceObserver((val)=>{
    debugger
}).observe({type: 'largest-contentful-paint', buffered: true})
// type 0无内容 1元素标签 2文本标签 3标签属性
const list = {
    type: 0,
    children: [
        {
            tag: 'div',
            type: 1,
            props: [
                {
                    type: 3,
                    name: "id",
                    source: "app"
                }
            ],
            children: [
                {
                    type: 1,
                    tag: 'h1',
                    children: [
                        {
                            type: 2,
                            content: "title"
                        }
                    ]
                },
                {
                    type: 1,
                    tag: 'ul',
                    children: [
                        {
                            type: 1,
                            tag: "li",
                            children: [
                                {
                                    type: 2,
                                    content: "title"
                                }
                            ]
                        },
                        {
                            type: 1,
                            tag: "li",
                            children: [
                                {
                                    type: 2,
                                    content: "title"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

const render = (item) => {
    const fragment = document.createDocumentFragment()
    let cur, children
    if(item.type === 0){
        if(item.children){
            item.children.forEach(element => {
                children = render(element)
                fragment.appendChild(children)
            });
        }
    }
    else if (item.type === 1) {
        cur = document.createElement(item.tag)
        if (item.props) {
            item.props.forEach(attr => {
                if (attr.type === 3) {
                    cur.setAttribute(attr.name, attr.source);
                }
            });
        }
        if(item.children){
            item.children.forEach(element => {
                children = render(element)
                cur.appendChild(children)
            });
        }
        fragment.appendChild(cur)
    }else if(item.type === 2){
        cur = document.createTextNode(item.content)
        fragment.appendChild(cur)
    }
    return fragment
}

document.querySelector('body').append(render(list))