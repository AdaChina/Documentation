# 班级管理

## 获取班级列表

```
GET /school_management/homerooms
```

**请求参数**

| 参数名 | 参数类型 | 必填 | 描述 | 示例 |
| --- | --- | --- | --- | --- |
| search | string | 否 | 搜索参数 | 1班 |
| status | string | 否 | 按班级状态筛选班级 | active |

| status 参考值 | 描述 |
| - | - |
| active | 在校班级 |
| graduated | 毕业班级 |

**搜索参数**

可搜索范围:

| 字段名 | 描述 |
| -- | -- |
| id | 班级ID |
| name | 班级名称 |

**响应字段**

| 字段名 | 描述 |
| -- | -- |
| id | 班级ID |
| name | 班级姓名 |
| status | 班级状态 |
| grade_name | 年级名 |
| student_count | 学生数量 |
| teachers: id | 教师ID |
| teachers: name | 教师姓名 |

**响应示例**

成功响应:

```
Status: 200 OK
```

```json
{
  "homerooms": [
    {
       "id": 56,
       "name": "一年（1）班",
       "status": "active",
       "grade_name": "一年级",
       "student_count": "58",
       "teachers": [
         {
           "id": 15,
           "name": "王宇"
         },
         {
           "id": 17,
           "name": "李明"
         }
       ]
    }
  ]
}
```

## 获取班级

```
GET /school_management/homerooms/:id
```

**请求参数**

| 参数名 | 参数类型 | 必填 | 描述 | 示例 |
| --- | --- | --- | --- | --- |
| id | integer | 是 | 班级ID | 56 |

**响应字段**

| 字段名 | 描述 |
| -- | -- |
| id | 班级ID |
| name | 班级姓名 |
| status | 班级状态 |
| grade_name | 年级名 |
| student_count | 学生数量 |
| teachers: id | 教师ID |
| teachers: name | 教师姓名 |

**响应示例**

成功响应:

```
Status: 200 OK
```

```json
{
   "id": 56,
   "name": "一年（1）班",
   "status": "active",
   "grade_name": "一年级",
   "student_count": "58",
   "teachers": [
     {
       "id": 15,
       "name": "王宇"
     },
     {
       "id": 17,
       "name": "李明"
     }
   ]
}
```

## 创建班级

```
POST /school_management/homerooms
```

**请求参数**

| 参数名 | 参数类型 | 必填 | 描述 | 示例 |
| --- | --- | --- | --- | --- |
| name | string | 是 | 班级名称 | 五年（2）班 |
| grade_id | integer | 是 | 年级ID | 8756 |

**响应字段**

| 字段名 | 描述 |
| -- | -- |
| id | 班级ID |
| name | 班级姓名 |
| status | 班级状态 |
| grade_name | 年级名 |
| student_count | 学生数量 |
| teachers: id | 教师ID |
| teachers: name | 教师姓名 |

**响应示例**

成功响应:

```
Status: 201 Created
```

```json
{
   "id": 56,
   "name": "一年（1）班",
   "status": "active",
   "grade_name": "一年级",
   "student_count": "58",
   "teachers": [
     {
       "id": 15,
       "name": "王宇"
     },
     {
       "id": 17,
       "name": "李明"
     }
   ]
}
```

## 更新班级

```
PATCH /school_management/homerooms/:id
```

**请求参数**

| 参数名 | 参数类型 | 必填 | 描述 | 示例 |
| --- | --- | --- | --- | --- |
| id | integer | 是 | 班级ID | 56 |
| name | string | 是 | 班级名称 | 五年（2）班 |
| grade_id | integer | 是 | 年级ID | 8756 |

**响应字段**

| 字段名 | 描述 |
| -- | -- |
| id | 班级ID |
| name | 班级姓名 |
| status | 班级状态 |
| grade_name | 年级名 |
| student_count | 学生数量 |
| teachers: id | 教师ID |
| teachers: name | 教师姓名 |

**响应示例**

成功响应:

```
Status: 200 OK
```

```json
{
   "id": 56,
   "name": "一年（1）班",
   "status": "active",
   "grade_name": "一年级",
   "student_count": "58",
   "teachers": [
     {
       "id": 15,
       "name": "王宇"
     },
     {
       "id": 17,
       "name": "李明"
     }
   ]
}
```

## 删除班级

```
DELETE /school_management/homerooms/:id
```

**请求参数**

| 参数名 | 参数类型 | 必填 | 描述 | 示例 |
| --- | --- | --- | --- | --- |
| id | integer | 是 | 班级ID | 56 |

**响应示例**

成功响应:

```
Status: 204 No Content
```

失败响应:

```
Status: 422 Unprocessable Entity
```
```json
{
  "error_code": 1010,
  "message": "无法删除有学生的班级"
}
```

## 设置为毕业班级

```
PATCH /school_management/homerooms/:id/graduate
```

**请求参数**

| 参数名 | 参数类型 | 必填 | 描述 | 示例 |
| --- | --- | --- | --- | --- |
| id | integer | 是 | 班级ID | 56 |


**响应示例**

成功响应:

```
Status: 200 OK
```

## 设置为在校班级

```
PATCH /school_management/homerooms/:id/ungraduate
```

**请求参数**

| 参数名 | 参数类型 | 必填 | 描述 | 示例 |
| --- | --- | --- | --- | --- |
| id | integer | 是 | 班级ID | 56 |


**响应示例**

成功响应:

```
Status: 200 OK
```

## 添加班主任

```
POST /school_management/homerooms/:id/teachers
```

**请求参数**

| 参数名 | 参数类型 | 必填 | 描述 | 示例 |
| --- | --- | --- | --- | --- |
| id | integer | 是 | 班级ID | 56 |
| teacher_id | integer | 是 | 教师 | 78 |

**响应示例**

成功响应:

```
Status: 201 Created
```

## 移除班主任

```
DELETE /school_management/homerooms/:id/teachers
```

**请求参数**

| 参数名 | 参数类型 | 必填 | 描述 | 示例 |
| --- | --- | --- | --- | --- |
| id | integer | 是 | 班级ID | 56 |
| teacher_id | integer | 是 | 教师 | 78 |

**响应示例**

成功响应:

```
Status: 204 No Content
```
