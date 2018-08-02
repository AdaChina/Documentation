# 家长管理

## 获取学生家长列表

```
GET /school_management/parents
```

**请求参数**

| 参数名 | 参数类型 | 必填 | 描述 | 示例 |
| --- | --- | --- | --- | --- |
| student_id | integer | 是 | 学生ID | 160 |

**响应字段**

| 字段名 | 描述 |
| -- | -- |
| id | 家长ID |
| name | 家长姓名 |
| nickname | 家长昵称(微信呢称) |
| avatar_url | 家长头像 |
| mobile | 手机号码 |
| gender | 性别 |

**响应示例**

成功响应:

```
Status: 200 OK
```

```json
{
  "parents": [
    {
      "id": 1,
      "name": "李丽",
      "nickname": "木子李",
      "avatar_url": "https://image.com/avatar.png",
      "mobile": "13812345678",
      "gender": "female",
      "created_at": "2018-07-24T14:45:15.000+08:00",
      "updated_at": "2018-07-24T14:45:15.000+08:00"
    }
  ]
}
```

## 创建家长

```
POST /school_management/parents
```

**请求参数**

| 参数名 | 参数类型 | 必填 | 描述 | 示例 |
| --- | --- | --- | --- | --- |
| student_id | integer | 是 | 学生ID | 160 |
| mobile | string | 是 | 手机号码 | 18512344321 |

**响应字段**

| 字段名 | 描述 |
| -- | -- |
| id | 家长ID |
| name | 家长姓名 |
| nickname | 家长昵称(微信呢称) |
| avatar_url | 家长头像 |
| mobile | 手机号码 |
| gender | 性别 |

**响应示例**

成功响应:

```
Status: 201 Created
```

```json
{
  "id": 1,
  "name": "李丽",
  "nickname": "木子李",
  "avatar_url": "https://image.com/avatar.png",
  "mobile": "13812345678",
  "gender": "female",
  "created_at": "2018-07-24T14:45:15.000+08:00",
  "updated_at": "2018-07-24T14:45:15.000+08:00"
}
```

## 更新家长

```
PATCH /school_management/parents
```

**请求参数**

| 参数名 | 参数类型 | 必填 | 描述 | 示例 |
| --- | --- | --- | --- | --- |
| id | integer | 是 | 学生ID | 160 |
| mobile | string | 是 | 手机号码 | 18512344321 |

**响应字段**

| 字段名 | 描述 |
| -- | -- |
| id | 家长ID |
| name | 家长姓名 |
| nickname | 家长昵称(微信呢称) |
| avatar_url | 家长头像 |
| mobile | 手机号码 |
| gender | 性别 |

**响应示例**

成功响应:

```
Status: 200 OK
```

```json
{
  "id": 1,
  "name": "李丽",
  "nickname": "木子李",
  "avatar_url": "https://image.com/avatar.png",
  "mobile": "13812345678",
  "gender": "female",
  "created_at": "2018-07-24T14:45:15.000+08:00",
  "updated_at": "2018-07-24T14:45:15.000+08:00"
}
```
