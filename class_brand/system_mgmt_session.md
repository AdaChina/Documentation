# 身份验证

登陆API管理班牌后台页面登陆和登出动作

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

| type 值参考 | 描述 |
| -- | -- |
| SystemAdmin | 系统管理员 |
| SchoolAdmin | 学校管理员 |

**响应示例**

成功响应:

```
Status: 200 OK
```

```json
{
  "id": 1,
  "type": "SystemAdmin",
  "name": "王毅"
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
