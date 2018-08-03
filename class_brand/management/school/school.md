# 学校管理

获取当前学校基本信息。更新学校配置等功能。

## 获取当前学校

```
GET /school_management/school
```
**响应字段**

| 字段名 | 描述 |
| -- | -- |
| id | 学校ID |
| name | 学校名称 |
| badge_url | 校徽地址 |
| power_schedule: week_days | 启用星期日 |
| power_schedule: startup_at | 开机时间 |
| power_schedule: shutdown_at | 关机时间 |

**响应示例**

成功响应:

```
Status: 200 OK
```

```json
{
  "id": 1,
  "name": "希望小学",
  "badge_url": "https://image.com/2.png",
  "created_at": "2018-07-24T14:45:15.000+08:00",
  "updated_at": "2018-07-24T14:45:15.000+08:00",
  "power_schedule": {
    "week_days": [1,3,6],
    "startup_at": "09:00",
    "shutdown_at": "18:00"
  }
}
```

## 获取年级信息

```
GET /school_management/school/grades
```

**响应字段**

| 字段名 | 描述 |
| -- | -- |
| id | 年级ID |
| name | 年级名称 |
| code | 年级代码 |

**响应示例**

成功响应:

```
Status: 200 OK
```

```json
{
  "id": 7847,
  "name": "六年级",
  "code": 6,
}
```

## 配置校徽

```
PATCH /school_management/school
```

**请求参数**

| 参数名 | 参数类型 | 必填 | 描述 | 示例 |
| --- | --- | --- | --- | --- |
| badge | file | 否 | 校徽 | badge.png |

**响应字段**

| 字段名 | 描述 |
| -- | -- |
| id | 学校ID |
| name | 学校名称 |
| badge_url | 校徽地址 |
| power_schedule: week_days | 启用星期日 |
| power_schedule: startup_at | 开机时间 |
| power_schedule: shutdown_at | 关机时间 |

**响应示例**

成功响应:

```
Status: 200 OK
```

```json
{
  "id": 1,
  "name": "希望小学",
  "badge_url": "https://image.com/2.png",
  "created_at": "2018-07-24T14:45:15.000+08:00",
  "updated_at": "2018-07-24T14:45:15.000+08:00",
  "power_schedule": {
    "week_days": [1,3,6],
    "startup_at": "09:00",
    "shutdown_at": "18:00"
  }
}
```

## 配置班牌定时开关

```
PATCH /school_management/school/power_schedule
```

**请求参数**

| 参数名 | 参数类型 | 必填 | 描述 | 示例 |
| --- | --- | --- | --- | --- |
| week_days | array[integer] | 是 | 星期日 | [0,1,2,4,5,6] |
| startup_at | string | 是 | 开机时间 | 09:15 |
| shutdown_at | string | 是 | 关机时间 | 18:45 |

* ```week_days``` 参数中，星期日由```0```代表, 星期六由```6```代表，数组中数值不可重复。
* ```startup_at```, ```shutdown_at``` 参数使用二十四小时制代表。如晚上9点，字符串为```21:00```。

**响应字段**

| 字段名 | 描述 |
| -- | -- |
| id | 学校ID |
| name | 学校名称 |
| badge_url | 校徽地址 |
| power_schedule: week_days | 启用星期日 |
| power_schedule: startup_at | 开机时间 |
| power_schedule: shutdown_at | 关机时间 |

**响应示例**

成功响应:

```
Status: 200 OK
```

```json
{
  "id": 1,
  "name": "希望小学",
  "badge_url": "https://image.com/2.png",
  "created_at": "2018-07-24T14:45:15.000+08:00",
  "updated_at": "2018-07-24T14:45:15.000+08:00",
  "power_schedule": {
    "week_days": [1,3,6],
    "startup_at": "09:00",
    "shutdown_at": "18:00"
  }
}
```
