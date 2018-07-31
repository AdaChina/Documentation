# 系统管理员管理

## 获取当前系统管理员

```
GET /system_management/system_admin
```

**响应字段**

| 字段名 | 描述 |
| -- | -- |
| id | 用户ID |
| name | 用户名称 |
| type | 用户类型 |
| school_id | 当前学校ID |
| school_name | 当前学校名字 |

* 如当前系统管理员未配置学校，将不会返回 ```school_id``` 及 ```school_name```
```json
{
  "id": 1,
  "name": "王管理",
  "type": "SystemAdmin",
  "school_id": 7,
  "school_name": "越秀路小学",
  "created_at": "2018-07-24T14:45:15.000+08:00",
  "updated_at": "2018-07-24T14:45:15.000+08:00"
}
```

## 配置学校

跳转到学校前，需要先为当前系统管理员配置所需跳转的学校。

```
PATCH /system_management/system_admin
```

**请求参数**

| 参数名 | 参数类型 | 必填 | 描述 | 示例 |
| --- | --- | --- | --- | --- |
| school_id | integer | 是 | 学校ID | 120 |

**响应字段**

| 字段名 | 描述 |
| -- | -- |
| id | 用户ID |
| name | 用户名称 |
| type | 用户类型 |
| school_id | 当前学校ID |
| school_name | 当前学校名字 |

```json
{
  "id": 1,
  "name": "王管理",
  "type": "SystemAdmin",
  "school_id": 7,
  "school_name": "越秀路小学",
  "created_at": "2018-07-24T14:45:15.000+08:00",
  "updated_at": "2018-07-24T14:45:15.000+08:00"
}
```
