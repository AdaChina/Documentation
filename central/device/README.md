# API使用说明

## API Endpoint

测试环境:
```
http://central.staging.adachina.net
```

生产环境：
```
TBD
```

演示环境:
```
TBD
```

## 鉴权

请求 Headers 的 ```Authorization```参数必须提供设备Token

示例:

```
Authorization: Basic c24xMjM0NTY3ODphYmNkZWY=
```

## 请求格式

请求时，Header 需要配置以下数据。

* 必须在 ```Accept``` 参数中声明使用API版本号以及请求格式
* 必须在 ```AdaCampus-App-Version``` 参数中提供当前APP版本号
* 必须在 ```AdaCampus-Watcher-Version``` 参数中提供当前守护进程版本号
* ```AdaCampus-HW-Version``` 可选择提供设备硬件版本号

示例:
```
Authorization: Basic c24xMjM0NTY3ODphYmNkZWY=
Accept: application/vnd.central.v1+json
AdaCampus-App-Version: 1.1.0
AdaCampus-HW-Version: M7-V1
AdaCampus-Watcher-Version: 1.1.0
```

## 分页信息

**分页字段**

列表类接口，会带上分页信息。

| 字段名 | 描述 |
| -- | -- |
| pages | 列表总页数 |
| page | 当前显示页 |
| total | 列表资源总数 |
| items | 当前显示资源数量 |
| items_per_page | 默认每页资源数量 |

**分页参数**

列表类接口可通过以下分页参数，控制返回信息。

| 参数名 | 参数类型 | 必填 | 描述 | 示例 |
| --- | --- | --- | --- | --- |
| page | integer | 否 | 返回页 | 2  |

示例:
```
GET /system_management/schools?page=2
```
