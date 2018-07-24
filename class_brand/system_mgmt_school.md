# 学校管理

学校基本信息创建及更新。学校年级创建及更新。

## 获取学校列表

```
GET /system_management/schools
```

**响应字段**

| 字段名 | 描述 |
| -- | -- |
| id | 学校ID |
| name | 学校名称 |
| school_type | 学校类型 |
| district_code | 行政区编码
| assistant_image_url | 小艾助手图片 |
| badge_url | 校徽地址 |
| device_count | 设备数量 |
| homeroom_count | 班级数量 |
| teacher_count | 老师数量 |
| student_count | 学生数量 |

**响应示例**

成功响应:

```
Status: 200 OK
```

```json
[
  schools: {
    "id"=>1,
    "name"=>"希望小学",
    "school_type"=>["小学"],
    "district_code"=>440101,
    "assistant_image_url"=>"https://image.com/1.png",
    "badge_url"=>"https://image.com/2.png",
    "device_count"=>10,
    "homeroom_count"=>2,
    "teacher_count"=>4,
    "student_count"=>4
    "created_at"=>"2018-07-24T14:45:15.000+08:00",
    "updated_at"=>"2018-07-24T14:45:15.000+08:00"
  }
]
```

## 获取单个学校

```
GET /system_management/schools/:id
```

**请求参数**

| 参数名 | 参数类型 | 必填 | 描述 | 示例 |
| --- | --- | --- | --- | --- |
| id | integer | 是 | 学校ID | 120 |

**响应字段**

| 字段名 | 描述 |
| -- | -- |
| id | 学校ID |
| name | 学校名称 |
| school_type | 学校类型 |
| district_code | 行政区编码
| assistant_image_url | 小艾助手图片 |
| badge_url | 校徽地址 |
| device_count | 设备数量 |
| homeroom_count | 班级数量 |
| teacher_count | 老师数量 |
| student_count | 学生数量 |

**响应示例**

成功响应:

```
Status: 200 OK
```

```json
{
  "id"=>1,
  "name"=>"希望小学",
  "school_type"=>["小学"],
  "district_code"=>440101,
  "assistant_image_url"=>"https://image.com/1.png",
  "badge_url"=>"https://image.com/2.png",
  "device_count"=>10,
  "homeroom_count"=>2,
  "teacher_count"=>4,
  "student_count"=>4
  "created_at"=>"2018-07-24T14:45:15.000+08:00",
  "updated_at"=>"2018-07-24T14:45:15.000+08:00"
}
```

## 创建学校

```
POST /system_management/schools
```

**请求参数**

| 参数名 | 参数类型 | 必填 | 描述 | 示例 |
| --- | --- | --- | --- | --- |
| name | string | 是 | 学校名 | 希望小学 |
| district_code | integer | 是 | 行政区编码 | 440101 |
| grades | array | 是 | 年级 | [1, 2, 3, 4, 5, 6, 11, 12, 13] |

**响应示例**

成功响应:

```
Status: 200 OK
```

```json
{
  "id"=>1,
  "name"=>"希望小学",
  "school_type"=>["小学"],
  "district_code"=>440101,
  "assistant_image_url"=>"https://image.com/1.png",
  "badge_url"=>"https://image.com/2.png",
  "device_count"=>10,
  "homeroom_count"=>2,
  "teacher_count"=>4,
  "student_count"=>4
  "created_at"=>"2018-07-24T14:45:15.000+08:00",
  "updated_at"=>"2018-07-24T14:45:15.000+08:00"
}
```

## 更新学校信息

```
PATCH /system_management/schools/:id
```

**请求参数**

| 参数名 | 参数类型 | 必填 | 描述 | 示例 |
| --- | --- | --- | --- | --- |
| id | integer | 是 | 学校ID | 120 |
| name    | string | 是 | 学校名 | 希望小学 |
| district_code | integer | 是 | 行政区编码 | 440101 |
| grades | array | 是 | 年级 | [1, 2, 3, 4, 5, 6, 11, 12, 13] |

**响应示例**

成功响应:

```
Status: 200 OK
```

```json
[
  {
    "id"=>1,
    "name"=>"希望小学",
    "school_type"=>["小学"],
    "district_code"=>440101,
    "assistant_image_url"=>"https://image.com/1.png",
    "badge_url"=>"https://image.com/2.png",
    "device_count"=>10,
    "homeroom_count"=>2,
    "teacher_count"=>4,
    "student_count"=>4
    "created_at"=>"2018-07-24T14:45:15.000+08:00",
    "updated_at"=>"2018-07-24T14:45:15.000+08:00"
  }
]
```

失败响应:

```
Status: 422 Unprocessable Entity
```
```json
{
  "grades": "一年级有关联班级，无法删除。"
}
```
