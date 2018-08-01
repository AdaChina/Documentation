# 教师管理

## 获取教师列表

```
GET /school_management/teachers
```

**请求参数**

| 参数名 | 参数类型 | 必填 | 描述 | 示例 |
| --- | --- | --- | --- | --- |
| search | string | 否 | 搜索参数 | 王易 |

**搜索参数**

可搜索范围:

| 字段名 | 描述 |
| -- | -- |
| name | 教师姓名 |
| role_ident_1 | 工号 |

**响应字段**

| 字段名 | 描述 |
| -- | -- |
| id | 教师ID |
| name | 教师姓名 |
| avatar_url | 教师头像 |
| role_ident_1 | 工号 |
| mobile | 手机号码 |
| gender | 性别 |
| email  | 电邮 |

**响应示例**

成功响应:

```
Status: 200 OK
```

```json
{
  "teachers": [
    {
      "id": 1,
      "name": "王易",
      "avatar_url": "https://image.com/avatar.png",
      "role_ident_1": "1578687269",
      "mobile": "13812345678",
      "gender": "female",
      "email": "abc@school.edu",
      "created_at": "2018-07-24T14:45:15.000+08:00",
      "updated_at": "2018-07-24T14:45:15.000+08:00"
    }
  ]
}
```

## 获取教师

```
GET /school_management/teachers/:id
```

**请求参数**

| 参数名 | 参数类型 | 必填 | 描述 | 示例 |
| --- | --- | --- | --- | --- |
| id | integer | 是 | 教师ID | 120 |

**响应字段**

| 字段名 | 描述 |
| -- | -- |
| id | 教师ID |
| name | 教师姓名 |
| avatar_url | 教师头像 |
| role_ident_1 | 工号 |
| mobile | 手机号码 |
| gender | 性别 |
| email  | 电邮 |

**响应示例**

成功响应:

```
Status: 200 OK
```

```json
{
  "id": 1,
  "name": "王易",
  "avatar_url": "https://image.com/avatar.png",
  "role_ident_1": "1578687269",
  "mobile": "13812345678",
  "gender": "female",
  "email": "abc@school.edu",
  "created_at": "2018-07-24T14:45:15.000+08:00",
  "updated_at": "2018-07-24T14:45:15.000+08:00"
}
```

## 创建教师

```
POST /school_management/teachers
```

**请求参数**

| 参数名 | 参数类型 | 必填 | 描述 | 示例 |
| --- | --- | --- | --- | --- |
| name | string | 是 | 教师姓名 | 王易 |
| avatar | file | 否 | 教师头像 | - |
| role_ident_1 | string | 是 | 工号 | 1578687269 |
| mobile | string | 否 | 手机号码 | 13812345678 |
| email  | integer | 否 | 邮箱地址 | abc@school.edu |
| gender | string | 是 | 性别 | female |

| gender 参考值 | 描述 |
| - | - |
| female | 女性 |
| male | 男性 |
| other | 其他 |

**响应字段**

| 字段名 | 描述 |
| -- | -- |
| id | 教师ID |
| name | 教师姓名 |
| avatar_url | 教师头像 |
| role_ident_1 | 工号 |
| mobile | 手机号码 |
| gender | 性别 |
| email  | 电邮 |

**响应示例**

成功响应:

```
Status: 200 OK
```

```json
{
  "id": 1,
  "name": "王易",
  "avatar_url": "https://image.com/avatar.png",
  "role_ident_1": "1578687269",
  "mobile": "13812345678",
  "gender": "female",
  "email": "abc@school.edu",
  "created_at": "2018-07-24T14:45:15.000+08:00",
  "updated_at": "2018-07-24T14:45:15.000+08:00"
}
```

## 更新教师信息

```
PATCH /school_management/teachers/:id
```

**请求参数**

| 参数名 | 参数类型 | 必填 | 描述 | 示例 |
| --- | --- | --- | --- | --- |
| id | integer | 是 | 教师ID | 120 |
| name | string | 是 | 教师姓名 | 王易 |
| avatar | file | 否 | 教师头像 | - |
| role_ident_1 | string | 是 | 工号 | 1578687269 |
| mobile | string | 否 | 手机号码 | 13812345678 |
| email  | integer | 否 | 邮箱地址 | abc@school.edu |
| gender | string | 是 | 性别 | female |

| gender 参考值 | 描述 |
| - | - |
| female | 女性 |
| male | 男性 |
| other | 其他 |

**响应字段**

| 字段名 | 描述 |
| -- | -- |
| id | 教师ID |
| name | 教师姓名 |
| avatar_url | 教师头像 |
| role_ident_1 | 工号 |
| mobile | 手机号码 |
| gender | 性别 |
| email  | 电邮 |

**响应示例**

成功响应:

```
Status: 200 OK
```

```json
{
  "id": 1,
  "name": "王易",
  "avatar_url": "https://image.com/avatar.png",
  "role_ident_1": "1578687269",
  "mobile": "13812345678",
  "gender": "female",
  "email": "abc@school.edu",
  "created_at": "2018-07-24T14:45:15.000+08:00",
  "updated_at": "2018-07-24T14:45:15.000+08:00"
}
```

## 删除教师

```
DELETE /school_management/teachers/:id
```

**请求参数**

| 参数名 | 参数类型 | 必填 | 描述 | 示例 |
| --- | --- | --- | --- | --- |
| id | integer | 是 | 教师ID | 120 |

**响应示例**

成功响应:

```
Status: 204 No Content
```
