# 学生管理

## 获取学生列表

```
GET /school_management/students
```

**请求参数**

| 参数名 | 参数类型 | 必填 | 描述 | 示例 |
| --- | --- | --- | --- | --- |
| search | string | 否 | 搜索参数 | 王易 |
| homeroom_id | integer | 否 | 按班级ID筛选学生 | 17 |
| status | string | 否 | 按学生状态筛选学生 | active |

| status 参考值 | 描述 |
| - | - |
| active | 在校学生 |
| graduated | 毕业学生 |
| withdrawn | 离校学生 |

**搜索参数**

可搜索范围:

| 字段名 | 描述 |
| -- | -- |
| name | 学生姓名 |
| role_ident_1 | 学号 |
| role_ident_2 | 唯一码 |

**响应字段**

| 字段名 | 描述 |
| -- | -- |
| id | 学生ID |
| name | 学生姓名 |
| avatar_url | 学生头像 |
| role_ident_1 | 学号 |
| role_ident_1 | 唯一码 |
| gender | 性别 |
| status | 状态 |
| card | 校园卡号 |
| parent_count | 家长数量 |
| graduation_date | 毕业日期 |

**响应示例**

成功响应:

```
Status: 200 OK
```

```json
{
  "students": [
    {
       "id": 78,
       "name": "王聪健",
       "avatar_url": "https://image.com/avatar.png",
       "role_ident_1": "568-28-1191",
       "role_ident_2": "289109583724095715",
       "gender": "female",
       "status": "active",
       "card": "2924335797",
       "parent_count": 0,
       "graduation_date": null
    }
  ]
}
```

## 获取学生

```
GET /school_management/students/:id
```

**请求参数**

| 参数名 | 参数类型 | 必填 | 描述 | 示例 |
| --- | --- | --- | --- | --- |
| id | integer | 是 | 学生ID | 78 |

**响应字段**

| 字段名 | 描述 |
| -- | -- |
| id | 学生ID |
| name | 学生姓名 |
| avatar_url | 学生头像 |
| role_ident_1 | 学号 |
| role_ident_1 | 唯一码 |
| gender | 性别 |
| status | 状态 |
| card | 校园卡号 |
| parent_count | 家长数量 |
| graduation_date | 毕业日期 |

**响应示例**

成功响应:

```
Status: 200 OK
```

```json
{
   "id": 78,
   "name": "王聪健",
   "avatar_url": "https://image.com/avatar.png",
   "role_ident_1": "568-28-1191",
   "role_ident_2": "289109583724095715",
   "gender": "female",
   "status": "active",
   "card": "2924335797",
   "parent_count": 0,
   "graduation_date": null
}
```

## 创建学生

```
POST /school_management/students
```

**请求参数**

| 参数名 | 参数类型 | 必填 | 描述 | 示例 |
| --- | --- | --- | --- | --- |
| homeroom_id | integer | 是 | 班级ID | 15 |
| name | string | 是 | 学生姓名 | 王易 |
| avatar | file | 否 | 学生头像 | - |
| gender | string | 是 | 性别 | female |
| role_ident_1 | string | 是 | 学号 | 1578687269 |
| role_ident_2 | string | 否 | 唯一码 | 160197897928972574 |
| card | string | 否 | 校园卡号 | 458877465 |

**响应字段**

| 字段名 | 描述 |
| -- | -- |
| id | 学生ID |
| name | 学生姓名 |
| avatar_url | 学生头像 |
| role_ident_1 | 学号 |
| role_ident_1 | 唯一码 |
| gender | 性别 |
| status | 状态 |
| card | 校园卡号 |
| parent_count | 家长数量 |
| graduation_date | 毕业日期 |

**响应示例**

成功响应:

```
Status: 201 Created
```

```json
{
   "id": 78,
   "name": "王聪健",
   "avatar_url": "https://image.com/avatar.png",
   "role_ident_1": "568-28-1191",
   "role_ident_2": "289109583724095715",
   "gender": "female",
   "status": "active",
   "card": "2924335797",
   "parent_count": 0,
   "graduation_date": null
}
```

## 更新学生信息

```
PATCH /school_management/students/:id
```

**请求参数**

| 参数名 | 参数类型 | 必填 | 描述 | 示例 |
| --- | --- | --- | --- | --- |
| id | integer | 是 | 学生ID | 78 |
| homeroom_id | integer | 是 | 班级ID | 15 |
| name | string | 是 | 学生姓名 | 王易 |
| avatar | file | 否 | 学生头像 | - |
| gender | string | 是 | 性别 | female |
| role_ident_1 | string | 是 | 学号 | 1578687269 |
| role_ident_2 | string | 否 | 唯一码 | 160197897928972574 |
| card | string | 否 | 校园卡号 | 458877465 |

**响应字段**

| 字段名 | 描述 |
| -- | -- |
| id | 学生ID |
| name | 学生姓名 |
| avatar_url | 学生头像 |
| role_ident_1 | 学号 |
| role_ident_1 | 唯一码 |
| gender | 性别 |
| status | 状态 |
| card | 校园卡号 |
| parent_count | 家长数量 |
| graduation_date | 毕业日期 |

**响应示例**

成功响应:

```
Status: 200 OK
```

```json
{
   "id": 78,
   "name": "王聪健",
   "avatar_url": "https://image.com/avatar.png",
   "role_ident_1": "568-28-1191",
   "role_ident_2": "289109583724095715",
   "gender": "female",
   "status": "active",
   "card": "2924335797",
   "parent_count": 0,
   "graduation_date": null
}
```

## 更新学生状态

```
PATCH /school_management/students/:id/status
```

**请求参数**

| 参数名 | 参数类型 | 必填 | 描述 | 示例 |
| --- | --- | --- | --- | --- |
| id | integer | 是 | 学生ID | 78 |
| status | string | 是 | 学生状态 | graduated |
| homeroom_id | integer | 否 | 班级ID | 15 |
| card | string | 否 | 校园卡号 | 458877465 |

| status 参考值 | 描述 |
| - | - |
| active | 设置为在校 |
| graduated | 设置为毕业 |
| withdrawn | 设置为离校 |

**响应字段**

| 字段名 | 描述 |
| -- | -- |
| id | 学生ID |
| name | 学生姓名 |
| avatar_url | 学生头像 |
| role_ident_1 | 学号 |
| role_ident_1 | 唯一码 |
| gender | 性别 |
| status | 状态 |
| card | 校园卡号 |
| parent_count | 家长数量 |
| graduation_date | 毕业日期 |

**响应示例**

成功响应:

```
Status: 200 OK
```

```json
{
   "id": 78,
   "name": "王聪健",
   "avatar_url": "https://image.com/avatar.png",
   "role_ident_1": "568-28-1191",
   "role_ident_2": "289109583724095715",
   "gender": "female",
   "status": "active",
   "card": "2924335797",
   "parent_count": 0,
   "graduation_date": null
}
```

## 删除学生

```
DELETE /school_management/students/:id
```

**请求参数**

| 参数名 | 参数类型 | 必填 | 描述 | 示例 |
| --- | --- | --- | --- | --- |
| id | integer | 是 | 学生ID | 120 |

**响应示例**

成功响应:

```
Status: 204 No Content
```
