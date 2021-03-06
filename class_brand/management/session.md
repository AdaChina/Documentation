# 身份验证

后台管理API授权（登入）及除权（登出）

## 登陆

```
POST /sessions
```

**请求参数**

| 参数名 | 参数类型 | 必填 | 描述 | 示例 |
| --- | --- | --- | --- | --- |
| email    | string | 是 | 邮箱地址 | user@school.edu |
| password | string | 是 | 密码 | password |
| remember_me | string | 否 | 持久登陆 | 1 |

**响应字段**

| 字段名 | 描述 |
| -- | -- |
| id | 用户ID |
| type | 用户类型 |
| name | 用户姓名 |
| school_id | 用户所属学校ID |
| school_name | 用户所属学校名称 |

| type 值参考 | 描述 |
| -- | -- |
| SystemAdmin | 系统管理员 |
| SchoolAdmin | 学校管理员 |

* ```school_id``` 及 ```school_name``` 仅在学校管理员登录时返回。

**响应示例**

成功响应:

```
Status: 200 OK
```

```json
{
  "id": 1,
  "type": "SystemAdmin",
  "name": "王毅",
  "school_id": 7,
  "school_name": "越秀路小学"
}
```

失败响应:

```
Status: 401 Unauthorized
```

```json
{
    "base": "邮箱和密码组合不正确"
}
```

## 登出

```
DELETE /sessions
```

**响应示例**

成功响应:

```
Status: 200 OK
```

```json
{
  "message": "success"
}
```

登出成功后，会重定向到登陆页面。
