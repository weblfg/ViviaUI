1. ### 安装

   * 项目根目录中进行安装

   1.1 使用npm

   ```
   npm install vivia-ui@0.1.0 -S
   ```

   1.2 使用cnpm 

   ```
   cnpm install vivia-ui@0.1.0 -S
   ```

2. ### 引入

   * 在main.js中进行引入

      ```
       import ViviaUI from "vivia-ui";
       import "vivia-ui/dist/vivid-ui.css";
       Vue.use(ViviaUI);
      ```

3.  ### 基础组件(以v-为前缀)

   * examples

     ```
     <v-button></v-button>
     <v-modal></v-modal>
     <v-form></v-form>
     ...
     ```

* button

参数支持

|  参数名  | 参数描述                                       | 参数类型 | 默认值  |
| :------: | :--------------------------------------------- | :------: | :-----: |
|   type   | 按钮类型（primary/success/warning/danger/info) |  String  | default |
|  plain   | 是否朴素按钮                                   | Boolean  |  false  |
|  round   | 是否圆角                                       | Boolean  |  false  |
|   size   | 大小（large /small)                            |  String  | default |
|  circle  | 是否是圆形按钮                                 | Boolean  |  false  |
| disabled | 是否禁用                                       | Boolean  |  false  |

事件支持

| 事件名 | 事件描述 |
| :----: | :------: |
| click  | 点击事件 |

* modal

  参数支持

  | 参数名  | 参数描述                         | 参数类型 | 默认值 |
  | ------- | -------------------------------- | -------- | ------ |
  | title   | 对话框标题                       | string   | 提示   |
  | width   | 宽度                             | string   | 50%    |
  | top     | 与顶部的距离                     | string   | 15vh   |
  | visible | 是否显示dialog（支持sync修饰符） | boolean  | false  |

  事件支持

  | 事件名 | 事件描述         |
  | ------ | ---------------- |
  | opened | 模态框显示的事件 |
  | closed | 模态框关闭的事件 |

  插槽slot

  | 插槽名称 | 插槽描述          |
  | -------- | ----------------- |
  | default  | modal的内容       |
  | title    | modal的标题       |
  | footer   | modal的底部操作区 |

* input

  参数支持

  | 参数名称      | 参数描述                   | 参数类型 | 默认值 |
  | ------------- | -------------------------- | -------- | ------ |
  | placeholder   | 占位符                     | string   | 空     |
  | type          | 文本框类型（text/password) | string   | text   |
  | disabled      | 禁用                       | boolean  | false  |
  | clearable     | 是否显示清空按钮           | boolean  | false  |
  | show-password | 是否显示密码切换按钮       | boolean  | false  |
  | name          | name属性                   | string   | 无     |

  事件支持

  | 事件名称 | 事件描述       |
  | -------- | -------------- |
  | blur     | 失去焦点事件   |
  | change   | 内容改变事件   |
  | focus    | 获取的焦点事件 |

* switch

  参数支持

  | 参数名称      | 参数描述           | 参数类型 | 默认值 |
  | ------------- | ------------------ | -------- | ------ |
  | v-model       | 双向绑定           | boolean  | false  |
  | name          | name属性           | string   | text   |
  | activeColor   | 自定义激活的颜色   | string   | 空     |
  | inactiveColor | 自定义不激活的颜色 | string   | 空     |

  事件支持

  | 事件名称 | 事件描述           |
  | -------- | ------------------ |
  | change   | change时触发的事件 |

* radio

  参数支持

  | 参数名称 | 参数描述        | 参数类型              | 默认值 |
  | -------- | --------------- | --------------------- | ------ |
  | v-model  | 双向绑定        | boolean               | false  |
  | label    | 单选框的value值 | string/number/boolean | 空     |
  | name     | name属性        | string                | 空     |

* checkbox

  参数支持

  | 参数名称 | 参数描述        | 参数类型 | 默认值 |
  | -------- | --------------- | -------- | ------ |
  | value    | 双向绑定        | boolean  | false  |
  | label    | 单选框的value值 | string   | 空     |
  | name     | name属性        | string   | 空     |

* checkbox-group

  | 参数名 | 类型  |
  | ------ | ----- |
  | value  | array |

* form

  参数支持

  | 参数名 | 类型   | required |
  | ------ | ------ | -------- |
  | model  | object | true     |

  | 参数名     | 类型   | 默认值 |
  | ---------- | ------ | ------ |
  | labelWidth | string | 80px   |

  * form-item

    参数支持

    | 参数名 | 类型   |
    | ------ | ------ |
    | label  | string |

    
