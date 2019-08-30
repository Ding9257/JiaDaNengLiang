const Init = Symbol('QueueStuby#Init');
// 创建队列
// 检查队列是否为空
// 检查队列是否溢出
// 入队
// 出队
// 队列长度
// 清空队列
// 销毁队列
// 输出队列

class QueueStuby {
    constructor(capacity) {
        this.capacity = capacity;
        this[Init]();
    }

    [Init]() {
        this.queue = new Array(this.capacity);
        this.head = 0;// 队头
        this.tail = 0;// 队尾
        this.queueLen = 0;  // 队列当前长度
    }

    isEmpty() {
        return this.queueLen === 0 ? true : false;
    }

    isOverFlow() {
        return this.queueLen === this.capacity;
    }

    /**
     * 先判断是否溢出
     * 根据队尾的值tail 添加元素
     * 队尾加1 队尾值等于队列最大值 从头开始
     * 队列长度加1
     */
    enQueue(ele) {
        if (this.isOverFlow()) {
            return false;
        }

        this.queue[this.tail] = ele;
        this.tail++;
        this.tail = this.tail % this.capacity;
        console.log('tail的值：' + this.tail);
        this.queueLen++;
        console.log('queueLen长度:' + this.queueLen);
        return true;
    }

    /**
     * 是否为空
     * 取值
     * 求余运算 队头位置
     * 队列长度减1
     */
    deQueue() {
        if (this.isEmpty()) {
            return false;
        } else {
            let ele = this.queue[this.head];
            this.head++;
            this.head = this.head % this.capacity;
            this.queueLen--;
            console.log("出队head值：", this.head);
            console.log('出队queueLen值:' + this.queueLen);
            return ele;
        }
    }

    len() {
        return this.queueLen;
    }

    clear() {
        this[Init]();
    }

    destory() {
        this.queue = null;
    }

    /**
     * 从队头开始遍历输出
     *
     */
    traversing() {
        console.log('遍历开始head:%s,queueLen:%s', this.head, this.queueLen);
        for (let i = this.head; i < this.queueLen + this.head; i++) {
            console.log("输出值：", this.queue[i % this.capacity]);
        }
        console.log('遍历结束');
    }
}

const q1 = new QueueStuby(6);


q1
    .enQueue
    (
        'a'
    );

q1
    .traversing
    ();

q1
    .enQueue
    (
        'b'
    );

q1
    .enQueue
    (
        'c'
    );

q1
    .enQueue
    (
        'd'
    );

q1
    .traversing
    ();
console
    .log
    (
        '出队: '
        ,
        q1
            .deQueue
            ());
q1
    .traversing
    ();






